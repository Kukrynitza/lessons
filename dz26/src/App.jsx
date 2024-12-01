import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/Layout.jsx'
import CategoryList from './pages/CategoryList.jsx'
import CreateCategory from './pages/CreateCategory.jsx'
import Main from './pages/Main.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/CreateCategory" element={<CreateCategory />} />
          <Route path="/CategoryList" element={<CategoryList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
