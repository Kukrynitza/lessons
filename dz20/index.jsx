import { createRoot } from 'react-dom/client'
import 'the-new-css-reset/css/reset.css'
import App from './src/App.jsx'
import './src/app.css'

const root = createRoot(document.querySelector('.app'))
root.render(<App />)
