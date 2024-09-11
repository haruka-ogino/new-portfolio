'use client'

import { useState } from 'react'
import '../styles/nav.css'
import Link from 'next/link'

export default function BlogNav() {
  const [open, setOpen] = useState(false)

  const closeNav = () => {
    setOpen(false)
  }

  const scrollToFooter = () => {
    const footerElement = document.getElementById('footer')
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' })
    }
    closeNav()
  }

  return (
    <>
      <nav className="nav hidden">
        <button className="buttons">
          <Link href="/">← Back to main page</Link>
        </button>
        <button className="buttons">
          <Link href="/blog-entries">My Blog Entries</Link>
        </button>
      </nav>
      <nav className="small-hidden">
        {!open ? (
          <div className="small-nav" onClick={() => setOpen(true)}>
            <div id="open-icon">
              <h5>━</h5>
              <h5>━</h5>
              <h5>━</h5>
            </div>
          </div>
        ) : (
          <>
            <div className="small-nav" id="small-navbar">
              <div id="close-icon" onClick={closeNav}>
                <h5>x</h5>
              </div>
              <div className="nav-items">
                <button className="buttons small-buttons" onClick={closeNav}>
                  <Link href="/">← Back to main page</Link>
                </button>
                <button className="buttons small-buttons" onClick={closeNav}>
                  <Link href="/blog-entries">My Blog Entries</Link>
                </button>
                <button
                  className="buttons small-buttons"
                  onClick={scrollToFooter}
                >
                  About this page
                </button>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  )
}
