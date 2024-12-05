import { Outlet } from 'react-router'
import Header from '../pages/Header/Header.jsx'
// import styles from './Layout.module.css'

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
