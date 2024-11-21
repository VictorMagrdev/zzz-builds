import { useEffect } from 'react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { $createHeadingNode, $createParagraphNode, $createTextNode, $getRoot } from 'lexical';

const prepopulatedRichText = () => {
  const root = $getRoot();
  if (root.getFirstChild() === null) {
    const heading = $createHeadingNode('h1').append($createTextNode('Welcome to the playground'));
    root.append(heading);

    const paragraph = $createParagraphNode().append(
      $createTextNode('This is a rich text playground built with Lexical and Tailwind CSS.')
    );
    root.append(paragraph);
  }
};

// Configuración inicial del editor
const initialConfig = {
  editorState: prepopulatedRichText,
  theme: {
    // Aquí podrías agregar más configuraciones de tema si es necesario
  },
  onError: (error: Error) => {
    console.error('Editor Error:', error);
  },
};

const App = () => {
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
       

        {/* Contenedor del editor */}
        <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg border border-gray-300">
          <h2 className="text-3xl font-bold text-center mb-4">Lexical Playground Editor</h2>
          <div className="editor-shell">
            {/* El componente del editor estará aquí */}
            <Editor />
          </div>
        </div>

        {/* Información adicional o plugins */}
        <footer className="w-full text-center mt-8">
          <p className="text-sm text-gray-500">
            Check out the{' '}
            <a href="https://github.com/facebook/lexical" className="text-blue-500 hover:underline">
              GitHub repository
            </a>{' '}
            for more information.
          </p>
        </footer>
      </div>
    </LexicalComposer>
  );
};

// Componente Editor
const Editor = () => {
  useEffect(() => {
    // Código para inicializar el editor o hacer cualquier otra configuración adicional si es necesario
  }, []);

  return (
    <div className="prose max-w-none">
      {/* Aquí el contenido editable del editor */}
      <p>
        This is an editable area. You can type here, apply formatting, and more!
      </p>
    </div>
  );
};

