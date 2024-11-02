import { createRoot } from 'react-dom/client'
import Body from './App.jsx'
import './app.css'
import './reset.css'

const root = createRoot(document.querySelector('body'))
root.render(
  <Body />
)
