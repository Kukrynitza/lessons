import styles from './UserStatus.module.css'
const isOnline = false

export default function UserStatus(){
return isOnline ? <p className={styles.on}>Пользователь в сети</p> : <p className={styles.off}>Пользователь не в сети</p>
}