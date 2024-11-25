import { createRoot } from 'react-dom/client'
import 'the-new-css-reset'
import './src/app.css'
import App from './src/App.jsx'

const root = createRoot(document.getElementById('app'))

root.render(<App />)
