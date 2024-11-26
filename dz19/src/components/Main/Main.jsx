import courses from '../../data/courses.js'
import styles from './Main.module.css'

export default function Main() {
  return (
    <main className={styles.page}>
      <h1>Курсы компании «Гарцующий пони»</h1>
      <ul className={styles.courses}>
        {courses.map((course) => (
          <li key={course.title}>
            <a href={`/${course.slug}`}>
              <article className={styles.course}>
                <h2>{course.title}</h2>
                <p className={styles.author}>{course.author}</p>
                <img src={course.image.src} alt={course.image.alt} />
                <p>{course.info}</p>
                <p className={styles.date}>{course.date}</p>
              </article>
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}
