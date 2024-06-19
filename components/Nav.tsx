'use client'

import { RefObject, useRef } from 'react'
import '../styles/nav.css'
import { Section } from '@/models/sections'

interface Props {
  sections: Section[]
}

export default function Nav({ sections }: Props) {
  const scroll = (id: RefObject<HTMLDivElement>) => {
    if (id.current) {
      id.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav id="nav" className="nav">
      {sections.map((section, i) => (
        <button className="buttons" onClick={() => scroll(section.sectionRef)}>
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
  )
}
