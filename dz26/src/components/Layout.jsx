import { Outlet } from 'react-router'
import Header from '../pages/Header/Header.jsx'

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}
