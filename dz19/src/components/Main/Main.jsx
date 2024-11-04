import styles from './Main.module.css'
import courses from './courses.js'
export default function Main() {
  return (
    <main>
      <h1>Курсы компании «Гарцующий пони»</h1>
      <ul className={styles.courses}>
        {courses.map((element) => (
          <li key={element.title}>
            <article>
              <h2>{element.title}</h2>
              <p className={styles.author}>{element.author}</p>
              <img src={element.image.src} alt={element.image.alt} />
              <p>{element.info}</p>
              <p className={styles.date}>{element.date}</p>
            </article>
          </li>
        ))}
      </ul>
    </main>
  )
}
