import { NavLink } from 'react-router'
import styles from './Header.module.css'

export default function Header() {
  function deriveClassName({ isActive }) {
    return isActive ? styles.isActive : ''
  }

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li><NavLink to="/" className={deriveClassName} end>Home</NavLink></li>
          <li><NavLink to="/categories" className={deriveClassName}>Categories</NavLink></li>
          <li><NavLink to="/sadness" className={deriveClassName}>404</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
