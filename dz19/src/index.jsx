import { createRoot } from 'react-dom/client'
import './reset.css'
import './app.css'
import App from './App.jsx'

const root = createRoot(document.querySelector('#app'))

root.render(<App />)
