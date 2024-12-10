'use client'

import Link from 'next/link.js'
import { usePathname, useRouter } from 'next/navigation'
import { match } from 'path-to-regexp'
import pages from '../../_sourses/headerStyles.js'
import styles from './Header.module.css'

export default function Header() {
  const router = useRouter()
  const currentPath = usePathname()
  const currentIndex = pages.findIndex((page) => {
    const matcher = match(page.path)

    return matcher(currentPath)
  })
  function haveEqually() {
    const leng = 100 / pages.length

    return pages.map((page, index) => `${page.color} ${index * leng}% ${(index + 1) * leng}%`)
  }
  function haventEqually() {
    const leng = 40 / (pages.length - 1)

    return pages.map((page, index) => {
      if (currentIndex === index) {
        return `${page.color} ${index * leng}% ${index * leng + 60}%`
      }
      const after = index > currentIndex ? (60 - leng) : 0

      return `${page.color} ${index * leng + after}% ${(index + 1) * leng + after}%`
    })
  }
  const gradientCreate = currentPath === '/' ? haveEqually() : haventEqually()
  const gradient = `linear-gradient(45deg, ${gradientCreate.join(', ')})`

  return (
    <header className={styles.header} style={{ '--gradient': gradient }}>
      <ul className={styles.catalog}>
        <li><Link href="/categories" className={currentPath === '/categories' ? styles.aActive : styles.a} style={{ '--textcolor': pages[currentIndex].textColor }}>CategoryList</Link></li>
        <li><Link href="/" className={currentPath === '/' ? styles.aActive : styles.a} style={{ '--textcolor': pages[currentIndex].textColor }}>Main</Link></li>
        <li><Link href="/categories/create" className={currentPath === '/categories/create' ? styles.aActive : styles.a} style={{ '--textcolor': pages[currentIndex].textColor }}>CreateCategory</Link></li>
        <li><Link href="/categories/edit" className={currentPath === '/categories/edit' ? styles.aActive : styles.a} style={{ '--textcolor': pages[currentIndex].textColor }}>UpdateCategory</Link></li>
      </ul>
    </header>
  )
}
