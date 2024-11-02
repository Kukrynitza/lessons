import styles from './Main.module.css'

const courses = [
  {
    title: 'Курсы компании «Гарцующий пони»',
    author: 'Иван Иванович',
    image: {
      src: 'https://doka.guide/html/semantics/demos/bad-markup/images/seo-course.png',
      alt: 'Ключевое слово SEO'
    },
    info: 'Благодаря этому курсу вы научитесь задавливать конкурентов с помощью ссылочной массы, а не качественного контента.',
    date: '13 февраля 2023'
  },
  {
    title: 'WordPress разработка',
    author: 'Ольга Ольгина',
    image: {
      src: 'https://doka.guide/html/semantics/demos/bad-markup/images/wordpress-course.png',
      alt: 'Ключевое слово SEO'
    },
    info: 'WordPress — топ за свои деньги. Изучите его, чтобы стать востребованным фрилансером.',
    date: '23 октября 2023'
  },
  {
    title: 'JavaScript для чайников',
    author: 'М. Михайловских',
    image: {
      src: 'https://doka.guide/html/semantics/demos/bad-markup/images/javascript-course.png',
      alt: 'Ключевое слово SEO'
    },
    info: ' Курс подойдёт для любых чайников: электрических, газовых и даже для кастрюлек, временно подменяющих сломанный чайник.',
    date: '30 ноября 2023'
  }
]
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
