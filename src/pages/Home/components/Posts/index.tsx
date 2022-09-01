import { useAPI } from '../../../../context/APIContext'
import { Post } from './Post'
import * as z from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  PostContainer,
  PostsContainer,
  SearchContainer,
  SearchForm,
  SearchHeader,
} from './styles'

const filterFormSchema = z.object({
  title: z.string(),
})

type filterFormInputs = z.infer<typeof filterFormSchema>

export function Posts() {
  const { posts } = useAPI()
  const {
    register,
    watch
  } = useForm<filterFormInputs>({
    resolver: zodResolver(filterFormSchema),
  })

  let postFilter = posts
  let titleIsChanging = watch('title')

  // console.log('title isChanging', titleIsChanging)

  if(titleIsChanging){
    postFilter = postFilter.filter(post => post.title.includes(titleIsChanging))
    // console.log('postFilter2', postFilter)
  }

  return (
    <PostsContainer>
      <SearchContainer>
        <SearchHeader>
          <h2>Publicações</h2>
          <span>{posts.length} publicações</span>
        </SearchHeader>
        <SearchForm>
          {/* <input type="text" placeholder="Pesquisar" /> */}
          <input
            id="title"
            {...register('title')}
            type="text"
            placeholder="Pesquisar"
            required
          />
        </SearchForm>
      </SearchContainer>
      <PostContainer>
        {postFilter.map((post) => {
          // console.log(post)
          return <Post key={post.id} post={post} />
        })}
      </PostContainer>
    </PostsContainer>
  )
}
