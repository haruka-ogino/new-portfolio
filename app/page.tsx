// import Image from 'next/image'
'use client'
import About from '@/components/About'
import styles from './page.module.css'
import Projects from '@/components/Projects'
import '../styles/home.css'
import Education from '@/components/Education'

export default function Home() {
  const handleClick = (id: string) => {
    const heading = document.getElementById(id)
    if (heading) {
      heading.scrollIntoView({ behavior: 'smooth' })
    }
  }
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
          <button className="buttons" onClick={() => handleClick('about-me')}>
            About Me
          </button>
          <button className="buttons" onClick={() => handleClick('projects')}>
            Projects
          </button>
          <button className="buttons" onClick={() => handleClick('education')}>
            Education
          </button>
        </aside>
        <section className="sections about-me" id="about-me">
          <About />
        </section>{' '}
        <section className="sections projects" id="projects">
          <Projects />
        </section>{' '}
        <section className="sections education" id="education">
          <Education />
        </section>{' '}
        {/* <section className="sections projects" ref={projectsRef}>
          <Projects />
        </section>{' '} */}
      </div>
    </main>
  )
}
