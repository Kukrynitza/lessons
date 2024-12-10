import 'the-new-css-reset'
import '@fontsource-variable/figtree'
import './_styles/app.css'
import Header from './_categories/Header/page.jsx'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
