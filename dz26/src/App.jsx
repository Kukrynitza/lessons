import { BrowserRouter, Route, Routes } from 'react-router'
import clsx from 'clsx'
import Layout from './components/Layout.jsx'
import CategoryList from './pages/CategoryList/CategoryList.jsx'
import CreateCategory from './pages/CreateCategory/CreateCategory.jsx'
import Main from './pages/Main/Main.jsx'
import UpdateCategory from './pages/UpdateCategory/UpdateCategory.jsx'
import UpdateCategoryBySlug from './pages/UpdateCategoryBySlug/UpdateCategoryBySlug.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/categories/create" element={<CreateCategory />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/categories/edit" element={<UpdateCategory />} />
          <Route path="/categories/:slug/edit" element={<UpdateCategoryBySlug />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
