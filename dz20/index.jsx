import { createRoot } from 'react-dom/client'
import App from './src/App.jsx'
import './src/app.css'
import './src/reset.css'
import "the-new-css-reset/css/reset.css";

const root = createRoot(document.querySelector('div'))
root.render(
    <App />
)
