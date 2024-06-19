// import Image from 'next/image'
'use client'
import About from '@/components/About'
import styles from './page.module.css'
import Projects from '@/components/Projects'
import { RefObject, useRef } from 'react'
import '../styles/home.css'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Nav from '@/components/Nav'
import ProfessionalDevelopment from '@/components/ProfessionalDevelopment'
import Achievements from '@/components/Achievements'

export default function Home() {
  // const navigate = useNavigate()
  // function handleNavigate(link: string) {
  //   navigate(`/${link}`)
  // }

  const aboutRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const eduRef = useRef<HTMLDivElement>(null)
  const workRef = useRef<HTMLDivElement>(null)
  const developmentRef = useRef<HTMLDivElement>(null)
  const extrasRef = useRef<HTMLDivElement>(null)

  const sections = [
    { section: 'About Me', sectionRef: aboutRef },
    { section: 'Projects', sectionRef: projectsRef },
    { section: 'Education', sectionRef: eduRef },
    { section: 'Work Experience', sectionRef: workRef },
    { section: 'Professional Development', sectionRef: developmentRef },
    { section: 'Extra-curriculars', sectionRef: extrasRef },
  ]

  return (
    <main>
      <Nav sections={sections} />

      <div className={styles.main}>
        <section className="sections about" ref={aboutRef}>
          <About />
        </section>{' '}
        <section className="sections projects" ref={projectsRef}>
          <Projects />
        </section>{' '}
        <section className="sections education" ref={eduRef}>
          <Education />
        </section>{' '}
        <section className="sections experience" ref={workRef}>
          <Experience />
        </section>{' '}
        <section className="sections development" ref={developmentRef}>
          <ProfessionalDevelopment />
        </section>{' '}
        <section className="sections achievements" ref={extrasRef}>
          <Achievements />
        </section>{' '}
      </div>
    </main>
  )
}
