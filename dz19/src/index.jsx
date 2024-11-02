import { createRoot } from 'react-dom/client'
import Header from './components/Header/App.jsx'
import Main from './components/Main/App.jsx'
import Footer from './components/Footer/App.jsx'
import './app.css'
import './reset.css'

const root = createRoot(document.querySelector('body'))
root.render(
  <>
    <Header />
    <Main />
    <Footer />
  </>
)
