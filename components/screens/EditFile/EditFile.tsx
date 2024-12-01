'use client'
import { MdProvider } from '@/hooks/useMdEdit'
import './EditFile.css'
import { Editor } from '@monaco-editor/react'
import Markdown from '@/components/molecules/markdown/Markdown/Markdown'


type EditFileProps = {
	fileId?: string | null
}

const EditFile = (props: EditFileProps) => {
	return (
		<MdProvider fileId={props.fileId}>
			<section className="edit-file">
				<div className='edit-file__editor'>
					<Editor></Editor>
				</div>
				<div className='edit-file__view'>
					<Markdown></Markdown>
				</div>
			</section>
		</MdProvider>
	);
}

export default EditFile;
