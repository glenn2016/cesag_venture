import { Routes, Route } from 'react-router-dom'
import Layout from '@components/layout/Layout'
import Home from '@pages/Home'
import Formations from '@pages/Formations'
import Adhesion from '@pages/Adhesion'
import NotFound from '@pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="formations" element={<Formations />} />
        <Route path="adhesion" element={<Adhesion />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App