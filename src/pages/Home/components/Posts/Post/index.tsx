import { HeaderPost, PostContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface User {
  id: number
  bio: string
  company: string
  avatar_url: string
  email: string
  followers: number
  following: number
  login: string
  name: string
  public_repos: number
}

export interface PostType {
  id: number
  comments: number
  body: string
  comments_url: string
  created_at: string
  events_url: string
  state: string
  title: string
  updated_at: string
  url: string
  user: User
  repository_url: string
}

interface PostProps {
  post: PostType
}

export function Post({ post }: PostProps) {
  const postUrl = `post=${post.id}`
  return (
    <PostContainer href={postUrl}>
      <HeaderPost>
        <h1>{post.title}</h1>
        {/* <span>Há 1 dia</span> */}
        <span>
          {formatDistanceToNow(new Date(post.created_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </HeaderPost>
      <span>{post.body}</span>
    </PostContainer>
  )
}
