"use client";

import { useState } from "react";
import { z } from "zod";
import axios from "axios";
import { XIcon } from "@primer/octicons-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
	title: z.string().min(1),
	description: z.string().min(1),
	body: z.string().min(1),
	tagList: z.string().optional(),
});

type TEditorProps = {
	body?: string;
	slug?: string;
	token: string;
	title?: string;
	tagList?: string[];
	description?: string;
};

export const NewArticle: React.FC<TEditorProps> = ({
	slug,
	body,
	token,
	title,
	tagList,
	description,
}) => {
	const [state, setState] = useState({
		loading: false,
		isError: false,
		errors: {} as Record<string, string[]>,
		tagList: tagList || [],
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: title || "",
			description: description || "",
			body: body || "",
			tagList: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		setState((prevState) => ({ ...prevState, loading: true }));

		try {
			const res = await fetch(
				`${process.env.NEXT_PUBLIC_RELATIVE_PATH}/articles`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Token ${token}`,
					},
					body: JSON.stringify({ ...values, tagList: state.tagList }),
				}
			);

			const data = await res.json();
			if (res.ok) {
				window.location.assign(`/guide/${data.guide.slug}`);
			} else {
				setState((prevState) => ({
					...prevState,
					loading: false,
					isError: true,
					errors: data.errors,
				}));
			}
		} catch (err) {
			console.error(err);
			setState((prevState) => ({
				...prevState,
				loading: false,
				isError: true,
				errors: { "": ["An unexpected error occurred"] },
			}));
		}
	}

	return (
		<div className="h-full w-full flex flex-col p-4 space-y-6 overflow-hidden">
			{/* Errores */}
			{state.isError && (
				<div className="bg-red-100 text-red-700 p-4 rounded-md overflow-auto max-h-[20%]">
					{Object.entries(state.errors).map(([key, messages]) => (
						<div key={key}>
							<strong>{key}</strong>
							<ul className="list-disc pl-5">
								{messages.map((message, idx) => (
									<li key={idx}>{message}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			)}

			{/* Formulario */}
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col flex-1 space-y-6 overflow-auto"
			>
				{/* Título */}
				<input
					{...form.register("title")}
					placeholder="guide Title"
					className="w-full py-4 px-6 rounded-md border border-gray-300 shadow-sm placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-2xl font-semibold"
					disabled={state.loading}
				/>

				{/* Descripción */}
				<textarea
					{...form.register("description")}
					placeholder="What’s this guide about?"
					className="w-full py-4 px-6 rounded-md border border-gray-300 shadow-sm placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-lg font-mono resize-none min-h-[75px] max-h-[200px]"
					disabled={state.loading}
				/>

				{/* Contenido */}
				<textarea
					{...form.register("body")}
					placeholder="Write your guide"
					className="w-full flex-grow py-4 px-6 rounded-md border border-gray-300 shadow-sm placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-lg font-mono resize-none overflow-auto min-h-[400px] max-h-[calc(100vh-250px)]"
					disabled={state.loading}
				/>

				{/* Lista de etiquetas */}
				{!slug && (
					<>
						<textarea
							placeholder="Enter tags"
							{...form.register("tagList")}
							className="w-full py-2 px-4 rounded-md border border-gray-300 shadow-sm placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none sm:text-base font-mono resize-none min-h-[50px]"
							onKeyUp={(e) => {
								if (e.key === "Enter") {
									const tag = e.currentTarget.value.trim();
									if (tag && !state.tagList.includes(tag)) {
										setState((prevState) => ({
											...prevState,
											tagList: [...prevState.tagList, tag],
										}));
									}
									form.resetField("tagList");
								}
							}}
							disabled={state.loading}
						/>
						<div className="flex flex-wrap gap-2">
							{state.tagList.map((tag, index) => (
								<span
									className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full flex items-center gap-2"
									key={index}
								>
									<XIcon
										size={16}
										className="cursor-pointer text-gray-500 hover:text-gray-700"
									/>
									{tag}
								</span>
							))}
						</div>
					</>
				)}

				{/* Botón */}
				<div className="flex justify-end">
					<button
						type="submit"
						className="bg-blue-600 text-white py-3 px-8 rounded-md text-lg font-semibold hover:bg-blue-700 disabled:opacity-50"
						disabled={state.loading}
					>
						Publish guide
					</button>
				</div>
			</form>
		</div>
	);
};
