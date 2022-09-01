import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faAngleLeft,
  faComment,
  faCalendarDay,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAPI } from '../../context/APIContext'
import { api } from '../../lib/axios'
import {
  LinkContainer,
  Link,
  PostDetailContainer,
  PostHeader,
  Infos,
  Info,
} from './styles'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { BodyPost } from './components/Body'

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

export function PostDetail() {
  const { posts } = useAPI()
  const [post, setPost] = useState({} as PostType)
  // console.log(user)
  // console.log(posts)

  const { postId } = useParams()
  console.log('useParams', postId)
  const postFind = posts.find((p) => p.id === Number(postId))
  console.log(post)

  const fetchGetPostInfo = useCallback(async () => {
    if(postFind) {
      const response = await api.get(`${postFind.url}`)
      setPost({
        id: response.data.id,
        comments: response.data.comments,
        body: response.data.body,
        comments_url: response.data.comments_url,
        created_at: response.data.created_at,
        events_url: response.data.events_url,
        state: response.data.state,
        title: response.data.title,
        updated_at: response.data.updated_at,
        url: response.data.url,
        user: response.data.user,
        repository_url: response.data.repository_url,
      })
      console.log(response.data)
    }
  }, [postFind?.url])

  useEffect(() => {
    fetchGetPostInfo()
  }, [fetchGetPostInfo])

  return (
    <PostDetailContainer>
      <PostHeader>
        <LinkContainer>
          <Link href="/">
            <FontAwesomeIcon icon={faAngleLeft} /> VOLTAR
          </Link>
          <Link href={post.repository_url} target="_blank">
            VER NO GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </LinkContainer>
        <h1>{post.title}</h1>
        <Infos>
          <Info>
            <FontAwesomeIcon icon={faGithub} />
            <h3>{post?.user?.login}</h3>
          </Info>
          <Info>
            <FontAwesomeIcon icon={faCalendarDay} />
            <h3>
              {post.created_at && formatDistanceToNow(new Date(post.created_at), {
                addSuffix: true,
                locale: ptBR,
              })}
            </h3>
          </Info>
          <Info>
            <FontAwesomeIcon icon={faComment} />
            <h3>{post?.comments} comentários</h3>
          </Info>
        </Infos>
      </PostHeader>
      <BodyPost body={post?.body}/>
    </PostDetailContainer>
  )
}
