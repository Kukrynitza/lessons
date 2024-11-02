import styles from './App.module.css'

export default function Main() {
  return (
    <main>
      <h1>Курсы компании «Гарцующий пони»</h1>
      <ul className={styles.courses}>
        <li>
          <article>
            <h2>SEO для начинающих</h2>
            <p className={styles.author}>Иван Иванович</p>
            <img src="https://doka.guide/html/semantics/demos/bad-markup/images/seo-course.png" alt="Ключевое слово SEO" />
            <p>
              Благодаря этому курсу вы научитесь задавливать конкурентов с помощью ссылочной массы,
              а не качественного
              контента.
            </p>
            <p className={styles.date}>13 февраля 2023</p>
          </article>
        </li>
        <li>
          <article>
            <h2>WordPress разработка</h2>
            <p className={styles.author}>Ольга Ольгина</p>
            <img src="https://doka.guide/html/semantics/demos/bad-markup/images/wordpress-course.png" alt="Ключевое слово SEO" />
            <p>
              WordPress — топ за свои деньги. Изучите его, чтобы стать востребованным фрилансером.
            </p>
            <p className={styles.date}>23 октября 2023</p>
          </article>
        </li>
        <li>
          <article>
            <h2>JavaScript для чайников</h2>
            <p className={styles.author}>М. Михайловских</p>
            <img src="https://doka.guide/html/semantics/demos/bad-markup/images/javascript-course.png" alt="Ключевое слово SEO" />
            <p>
              Курс подойдёт для любых чайников: электрических, газовых и даже для кастрюлек,
              временно подменяющих
              сломанный чайник.
            </p>
            <p className={styles.date}>30 ноября 2023</p>
          </article>
        </li>
      </ul>
    </main>
  )
}
