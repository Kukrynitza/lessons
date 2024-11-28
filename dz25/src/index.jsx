import { createRoot } from 'react-dom/client'
import 'the-new-css-reset/css/reset.css'
import '@fontsource-variable/cinzel'
import './app.css'
import App from './App.jsx'

const root = createRoot(document.querySelector('#app'))
root.render(<App />)
