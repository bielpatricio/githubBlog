import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './components/layouts/DefaultLayout'
import { APIContextProvider } from './context/APIContext'
import { Home } from './pages/Home'
import { PostDetail } from './pages/PostDetails'

export function Router() {
  return (
    <APIContextProvider>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="post=:postId" element={<PostDetail />} />
        </Route>
      </Routes>
    </APIContextProvider>
  )
}
