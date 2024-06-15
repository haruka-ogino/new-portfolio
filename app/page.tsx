// import Image from 'next/image'
'use client'
import About from '@/components/About'
import styles from './page.module.css'
import Projects from '@/components/Projects'
import { useRef } from 'react'

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' })
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
      <div className={styles.main} id="intro">
        <section className={styles.intro + ' sections'}>
          <p>Hi there, I&apos;m</p>
          <h1>Haruka Ogino</h1>
          <p>Full-stack Developer</p>
        </section>
        <aside className="sections">
          <button className="buttons" onClick={scrollToAbout}>
            About Me
          </button>
          <button className="buttons" onClick={scrollToProjects}>
            Projects
          </button>
        </aside>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
      </div>
    </main>
  )
}
