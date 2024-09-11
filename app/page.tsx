'use client'
import About from '@/components/About'
import styles from './page.module.css'
import Projects from '@/components/Projects'
import { useRef, useState } from 'react'
import '../styles/home.css'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Nav from '@/components/Nav'
// import ProfessionalDevelopment from '@/components/ProfessionalDevelopment'
import Achievements from '@/components/Achievements'
import verticalScroll from '@/hooks/verticalScroll'
import PopUp from '@/components/ProjectPopup'

export default function Home() {
  const [show, setShow] = useState(false)
  const [popupTitle, setPopupTitle] = useState('')

  verticalScroll(show)
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
    // { section: 'Professional Development', sectionRef: developmentRef },
    { section: 'Extra-curriculars', sectionRef: extrasRef },
  ]

  return (
    <main>
      <Nav sections={sections} />
      {show && (
        <div className="popup-overlay" onClick={() => setShow(false)}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <PopUp setShow={setShow} title={popupTitle} />
          </div>
        </div>
      )}
      <div className={styles.main}>
        <section className="sections about" ref={aboutRef}>
          <About />
        </section>{' '}
        <section className="sections projects" ref={projectsRef}>
          <Projects setShow={setShow} setTitle={setPopupTitle} />
        </section>{' '}
        <section className="sections education" ref={eduRef}>
          <Education />
        </section>{' '}
        <section className="sections experience" ref={workRef}>
          <Experience />
        </section>{' '}
        {/* <section className="sections development" ref={developmentRef}>
          <ProfessionalDevelopment />
        </section>{' '} */}
        <section className="sections achievements" ref={extrasRef}>
          <Achievements />
        </section>{' '}
      </div>
    </main>
  )
}
