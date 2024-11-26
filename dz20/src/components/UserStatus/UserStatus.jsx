import styles from './UserStatus.module.css'

export default function UserStatus({ isOnline = false }) {
  return isOnline
    ? <p className={styles.online}>Пользователь в сети</p>
    : <p className={styles.offline}>Пользователь не в сети</p>
}
