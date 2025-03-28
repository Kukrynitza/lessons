import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/Layout.jsx'
import Categories from './pages/Categories.jsx'
import Category from './pages/Category.jsx'
import CreateCategory from './pages/CreateCategory.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="categories/create" element={<CreateCategory />} />
        <Route path="categories/:slug" element={<Category />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
