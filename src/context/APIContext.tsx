import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

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

interface APIContextType {
  user: User
  posts: PostType[]
}

const APIContext = createContext({} as APIContextType)

interface APIContextProviderProps {
  children: ReactNode
}

export function APIContextProvider({ children }: APIContextProviderProps) {
  const [user, setUser] = useState({} as User)
  const [posts, setPosts] = useState<PostType[]>([])
  const repository = 'githubBlog'
  const username = 'bielpatricio'

  const fetchIssues = useCallback(
    async (query?: string) => {
      if (user.login) {
        const repo = `repo:${user.login}` + '/' + `${repository}`
        console.log(repo)
        const response = await api.get(`/search/issues`, {
          params: {
            _sort: 'createdAt',
            _order: 'desc',
            q: repo,
          },
        })
        // console.log(response.data.items)
        response.data.items.map((post: PostType) => {
          return setPosts((state) => [
            ...state,
            {
              id: post.id,
              comments: post.comments,
              body: post.body,
              comments_url: post.comments_url,
              created_at: post.created_at,
              events_url: post.events_url,
              state: post.state,
              title: post.title,
              updated_at: post.updated_at,
              url: post.url,
              user: post.user,
              repository_url: post.repository_url,
            },
          ])
        })
      }
    },
    [user.login],
  )

  const fetchGetUserInfo = useCallback(async () => {
    const response = await api.get(`/users/${username}`)
    setUser({
      id: response.data.id,
      bio: response.data.bio,
      company: response.data.company,
      avatar_url: response.data.avatar_url,
      email: response.data.email,
      followers: response.data.followers,
      following: response.data.following,
      login: response.data.login,
      name: response.data.name,
      public_repos: response.data.public_repos,
    })
    // console.log(response.data)
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  useEffect(() => {
    fetchGetUserInfo()
  }, [fetchGetUserInfo])

  return (
    <APIContext.Provider
      value={{
        user,
        posts,
      }}
    >
      {children}
    </APIContext.Provider>
  )
}

export function useAPI() {
  const context = useContext(APIContext)
  return context
}
