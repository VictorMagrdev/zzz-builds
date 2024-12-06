"use client";
import { createContext, useContext, useEffect, useState } from "react";

type ContextType = {
	setContent: (e: string) => void;
	content: string
};

const MdContext = createContext<ContextType>({
	setContent: () => {},
	content: ''
});

type ProviderProps = {
	fileId?: string | null
	children: any
}

export const MdProvider = ({ children, fileId }: ProviderProps) => {
	const [content, setContent] = useState<string>('');
	useEffect(() => {
		if (fileId){
			
		}
	}, [fileId])
	return (
		<MdContext.Provider value={{ content, setContent }}>
			{children}
		</MdContext.Provider>
	);
};

export const useMd = () => useContext(MdContext);
