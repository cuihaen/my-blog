import ReactMarkdown from "react-markdown";

const markdown = `
#헤딩
**굵게**
일반 텍스트
`;

function MarkdownRenderer(){
    return(
        <ReactMarkdown>{ markdown }</ReactMarkdown>
    )
}

export default MarkdownRenderer;