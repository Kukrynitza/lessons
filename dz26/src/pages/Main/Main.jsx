import { Link } from 'react-router'
import styles from './Main.module.css'

export default function Main() {
  return (
    <>
      <title>MainPage</title>
      <ul className={styles.ul}>
        <li className={styles.li}><img src="https://i.pinimg.com/736x/28/fd/3d/28fd3da100e3e91b5fede654dea24f80.jpg" alt="the story of the raccoon and the crocodile" className={styles.img} /></li>
        <li className={styles.li}><img src="https://i.pinimg.com/736x/6d/a4/4f/6da44f22b3653c1d1565438d87a5af52.jpg" alt="the story of the raccoon and the crocodile" className={styles.img} /></li>
        <li className={styles.li}><img src="https://i.pinimg.com/736x/fd/e7/a9/fde7a9ee574155de077a5d35f4d79a95.jpg" alt="the story of the raccoon and the crocodile" className={styles.img} /></li>
      </ul>
    </>
  )
}
