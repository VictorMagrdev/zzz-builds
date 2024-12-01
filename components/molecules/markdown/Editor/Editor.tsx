import { useMd } from '@/hooks/useMdEdit';
import './Editor.css'
import MonacoEditor from "@monaco-editor/react";
import latex from 'monaco-latex'

type EditorProps = {}

const Editor = (props: EditorProps) => {

	const {content, setContent} = useMd()

	const handleEditorWrite = (value, event) => {
		setContent(value)
  }

  const defineCustomTheme = (monaco) => {
    monaco.editor.defineTheme('custom-theme', {
      base: 'vs-dark', // Tema base, puede ser 'vs-light' también
      inherit: true,   // Hereda reglas del tema base
      rules: [{ background: '1E1E1E', token: 'comment' }], // Reglas de tokens de sintaxis
      colors: {
        'editor.foreground': '#F8F8F8',
        'editor.background': '#1E1E1E',
        'editorCursor.foreground': '#A7A7A7',  // Color del cursor
        'editor.lineHighlightBackground': '#2B2B2B', // Color de la línea resaltada
      },
    });
    monaco.languages.register({ id: 'latex' });

    monaco.languages.setMonarchTokensProvider('latex', latex)
  };


	return (
		<MonacoEditor className="editor"
			height="100%"
			width="100%"
			defaultLanguage="markdown"
			value={content}
			onChange={handleEditorWrite}
			theme="vs-dark"
			beforeMount={defineCustomTheme}
			options={ {
				minimap: {enabled: false},
				fontSize: 17,
				padding: {
					top: 20,
					bottom: 20
				},
				cursorBlinking: 'smooth',
				autoIndent: 'full',
				autoClosingBrackets: 'always',
				autoClosingQuotes: 'always',
				autoSurround: 'languageDefined',
				bracketPairColorization: {enabled: true},
				matchBrackets: "always",
				wordWrap: 'on',
				wrappingStrategy: "advanced",
				scrollBeyondLastLine: false,
			} }
		/>
	);
}

export default Editor;
