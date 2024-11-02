import styles from './App.module.css'

export default function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li ><a href="home">Главная</a></li>
          <li><a href="blog">Блог</a></li>
          <li><a href="contact">Контакты</a></li>
        </ul>
      </nav>
    </header>)
}
