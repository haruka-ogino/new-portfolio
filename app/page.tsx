// import Image from 'next/image'
'use client'
import About from '@/components/About'
import styles from './page.module.css'
import Projects from '@/components/Projects'
import { RefObject, useRef } from 'react'
import '../styles/home.css'
import Education from '@/components/Education'

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const eduRef = useRef<HTMLDivElement>(null)

  // const scrollToAbout = () => {
  //   if (aboutRef.current) {
  //     aboutRef.current.scrollIntoView({ behavior: 'smooth' })
  //   }
  // }

  // const scrollToProjects = () => {
  //   if (projectsRef.current) {
  //     projectsRef.current.scrollIntoView({ behavior: 'smooth' })
  //   }
  // }

  const scroll = (id: RefObject<HTMLDivElement>) => {
    if (id.current) {
      id.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // const handleClick = (id: string) => {
  //   const heading = document.getElementById(id)
  //   if (heading) {
  //     heading.scrollIntoView({ behavior: 'smooth' })
  //   }
  // }
  // const navigate = useNavigate()
  // function handleNavigate(link: string) {
  //   navigate(`/${link}`)
  // }
  return (
    <main>
      <div className={styles.main}>
        <section className={styles.intro + ' sections'}>
          <p>Hi there, I&apos;m</p>
          <h1>Haruka Ogino</h1>
          <p>Full-stack Developer</p>
        </section>
        <aside className="sections">
          <button className="buttons" onClick={() => scroll(aboutRef)}>
            About Me
          </button>
          <button className="buttons" onClick={() => scroll(projectsRef)}>
            Projects
          </button>
          <button className="buttons" onClick={() => scroll(eduRef)}>
            Education
          </button>
        </aside>
        <section className="sections about-me" ref={aboutRef}>
          <About />
        </section>{' '}
        <section className="sections projects" ref={projectsRef}>
          <Projects />
        </section>{' '}
        <section className="sections education" ref={eduRef}>
          <Education />
        </section>{' '}
        {/* <section className="sections projects" ref={projectsRef}>
          <Projects />
        </section>{' '} */}
      </div>
    </main>
  )
}
