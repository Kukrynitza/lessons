import { NavLink, useLocation } from 'react-router'
import pages from '../../sourses/headerStyles.js'
import styles from './Header.module.css'

export default function Header() {
  const location = useLocation()
  const currentPath = location.pathname
  const currentIndex = pages.findIndex((page) => currentPath === page.path)
  function haveEqually() {
    const leng = 100 / pages.length

    return pages.map((page, index) => `${page.color} ${index * leng}% ${(index + 1) * leng}%`)
  }
  function haventEqually() {
    const leng = 40 / (pages.length - 1)

    return pages.map((page, index) => {
      if (currentIndex === index) {
        return `${page.color} ${index * leng}% ${index * leng + 60}%`
      }
      const after = index > currentIndex ? 40 : 0

      return `${page.color} ${index * leng + after}% ${(index + 1) * leng + after}%`
    })
  }
  const gradientCreate = currentPath === '/' ? haveEqually() : haventEqually()
  const gradient = `linear-gradient(45deg, ${gradientCreate.join(', ')})`

  return (
    <header className={styles.header} style={{ '--gradient': gradient }}>
      <ul className={styles.catalog}>
        <li><NavLink to="/categories" className={({ isActive }) => (isActive ? styles.aActive : styles.a)} style={{ '--textcolor': pages[currentIndex].textColor }} end>CategoryList</NavLink></li>
        <li><NavLink to="/" className={({ isActive }) => (isActive ? styles.aActive : styles.a)} style={{ '--textcolor': pages[currentIndex].textColor }} end>Main</NavLink></li>
        <li><NavLink to="/categories/create" className={({ isActive }) => (isActive ? styles.aActive : styles.a)} style={{ '--textcolor': pages[currentIndex].textColor }} end>CreateCategory</NavLink></li>
        <li><NavLink to="/categories/:slug/edit" className={({ isActive }) => (isActive ? styles.aActive : styles.a)} style={{ '--textcolor': pages[currentIndex].textColor }} end>UpdateCategoryByID</NavLink></li>
      </ul>
    </header>
  )
}
