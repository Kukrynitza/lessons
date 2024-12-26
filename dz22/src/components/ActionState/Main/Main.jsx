import CenterForm from '../CenterForm/CenterForm.jsx'
import TopForm from '../TopForm/TopForm.jsx'
import styles from './Main.module.css'

export default function Main() {
  return (
    <main>
      <TopForm/>
      <p className={styles.or}>OR</p>
      <CenterForm/>
    </main>
  )
}
