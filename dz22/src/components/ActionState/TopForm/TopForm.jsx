import styles from './TopForm.module.css'

export default function TopForm() {
  return (
    <form action="sa" method="get" className={styles.topForm}>
      <h1>Create an account</h1>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#1e223b" viewBox="0 0 256 256">
          <path
            d="M224,128a96,96,0,1,1-21.95-61.09,8,8,0,1,1-12.33,10.18A80,80,0,1,0,207.6,136H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128Z">
          </path>
        </svg>Sign in with Google
      </button>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#1e223b" viewBox="0 0 256 256">
          <path
            d="M228.88,26.19a9,9,0,0,0-9.16-1.57L17.06,103.93a14.22,14.22,0,0,0,2.43,27.21L72,141.45V200a15.92,15.92,0,0,0,10,14.83,15.91,15.91,0,0,0,17.51-3.73l25.32-26.26L165,220a15.88,15.88,0,0,0,10.51,4,16.3,16.3,0,0,0,5-.79,15.85,15.85,0,0,0,10.67-11.63L231.77,35A9,9,0,0,0,228.88,26.19Zm-61.14,36L78.15,126.35l-49.6-9.73ZM88,200V152.52l24.79,21.74Zm87.53,8L92.85,135.5l119-85.29Z">
          </path>
        </svg>Sign in with Telegram
      </button>
    </form>
  )
}
