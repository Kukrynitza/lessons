import 'the-new-css-reset/css/reset.css'
import './src/app.css'
import { createRoot } from 'react-dom/client'
import App from './src/App.jsx'
import '@fontsource/hachi-maru-pop';
const root = createRoot(document.querySelector('#app'))
root.render(<App />)
