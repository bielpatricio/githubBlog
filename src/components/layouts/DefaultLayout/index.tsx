import { Outlet } from 'react-router-dom'
import { Header } from '../../Header'
import { DefaultContainer } from './styles'

export function DefaultLayout() {
  return (
    <DefaultContainer>
      <Header />
      <Outlet />
    </DefaultContainer>
  )
}
