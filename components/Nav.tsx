'use client'

import { RefObject, useRef, useState } from 'react'
import '../styles/nav.css'
import { Section } from '@/models/sections'
import { FaBars } from 'react-icons/fa6'

interface Props {
  sections: Section[]
}

export default function Nav({ sections }: Props) {
  const scroll = (id: RefObject<HTMLDivElement>) => {
    if (id.current) {
      id.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const [open, setOpen] = useState(false)
  console.log(open)

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
        {/* <button className="buttons">Home</button>
      <button className="buttons">Back to the top</button>
      <button className="buttons">My GitHub</button>
      <button className="buttons">My LinkedIn</button>
      <button className="buttons">
        My CV
        <i className="fa fa-github-square" aria-hidden="true" />
      </button> */}
        {/* <button
        className="buttons"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Back to the top
      </button> */}
      </nav>
      <nav className="small-nav small-hidden">
        {/* <div onClick={() => setOpen((prevOpen) => !prevOpen)}> */}
        {!open ? (
          <div className="open-icon" onClick={() => setOpen(true)}>
            <h5>━</h5>
            <h5>━</h5>
            <h5>━</h5>
          </div>
        ) : (
          <div className="small-nav-items">
            <div id="close-icon" onClick={() => setOpen(false)}>
              <h5>x</h5>
            </div>
            {sections.map((section, i) => (
              <button
                key={`button-${i}`}
                className="buttons small-buttons"
                onClick={() => scroll(section.sectionRef)}
              >
                {section.section}
              </button>
            ))}
          </div>
        )}
        {/* </div> */}

        {/* <h5>⎯</h5>
          <h5>⎯</h5>
          <h5>⎯</h5> */}
      </nav>
    </>
  )
}
