import { Posts } from './components/Posts'
import { Profile } from './components/profile'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <Posts />
    </HomeContainer>
  )
}
