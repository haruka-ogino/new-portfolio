'use client'

import { RefObject, useRef, useState } from 'react'
import '../styles/nav.css'
import { Section } from '@/models/sections'
import { FaBars } from 'react-icons/fa6'

interface Props {
  sections: Section[]
}

export default function Nav({ sections }: Props) {
  const [open, setOpen] = useState(false)

  const closeNav = () => {
    setOpen(false)
  }

  const scroll = (id: RefObject<HTMLDivElement>) => {
    if (id.current) {
      id.current.scrollIntoView({ behavior: 'smooth' })
    }
    closeNav()
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
      <nav id="nav" className="nav hidden">
        {sections.map((section, i) => (
          <button
            key={`button-${i}`}
            className="buttons"
            onClick={() => scroll(section.sectionRef)}
          >
            {section.section}
          </button>
        ))}
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
                {sections.map((section, i) => (
                  <button
                    key={`button-${i}`}
                    className="buttons small-buttons"
                    onClick={() => scroll(section.sectionRef)}
                  >
                    {section.section}
                  </button>
                ))}
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
