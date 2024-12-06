import './Markdown.css'
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import { useEffect } from "react";
import { useMd } from '@/hooks/useMdEdit';

type MarkdownProps = {}

const Markdown = (props: MarkdownProps) => {

	const {content} = useMd()

	useEffect(() => {}, [])

  const renderers = {
    code: (d) => {
      const match = /language-(\w+)/.exec(d.className || '')
      const value: string[] = d.children
      const language: string = (match ? (match[1] ? match[1] : '') : '')

      return (
					(d.inline) ?
					(
							{value}

					):(
						<code className="inline">{value}</code>
					)
				)
    },
  };
  return (
    <ReactMarkdown className='markdown'
      rehypePlugins={[rehypeKatex, rehypeRaw]}
      remarkRehypeOptions={
        {
          allowDangerousHtml: false,
        }
      }
    >
      {content}
    </ReactMarkdown>
  );
}

export default Markdown;
