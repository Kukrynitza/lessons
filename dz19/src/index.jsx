import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './app.css'
import './reset.css'

const root = createRoot(document.querySelector('div'))
root.render(
  <>
    <App />
  </>
)
