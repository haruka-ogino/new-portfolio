import { RefObject, useRef } from 'react'
import '../styles/nav.css'

export default function Nav() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const eduRef = useRef<HTMLDivElement>(null)
  const workRef = useRef<HTMLDivElement>(null)

  const scroll = (id: RefObject<HTMLDivElement>) => {
    if (id.current) {
      id.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const sections = []
  return (
    <nav id="nav" className="nav">
      <button className="buttons" onClick={() => scroll(aboutRef)}>
        About Me
      </button>
      <button className="buttons" onClick={() => scroll(projectsRef)}>
        Projects
      </button>
      <button className="buttons" onClick={() => scroll(eduRef)}>
        Education
      </button>
      <button className="buttons">Home</button>
      <button className="buttons">Back to the top</button>
      <button className="buttons">My GitHub</button>
      <button className="buttons">My LinkedIn</button>
      <button className="buttons">
        My CV
        <i className="fa fa-github-square" aria-hidden="true" />
      </button>
    </nav>
  )
}

// onClick={() =>window.scrollTo({ top: 0, behavior: 'smooth' })}
