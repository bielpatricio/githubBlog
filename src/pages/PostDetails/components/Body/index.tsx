import { BodyContainer } from "./styles"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface BodyProps{
  body: string
}

export function BodyPost({ body }: BodyProps) {
  return (
    <BodyContainer>
      <ReactMarkdown children={body} remarkPlugins={[remarkGfm]} />
    </BodyContainer>
  )
}