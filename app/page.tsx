// import Image from 'next/image'
import About from '@/components/About'
import styles from './page.module.css'
import Projects from '@/components/Projects'

export default function Home() {
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
        <section className={styles.intro}>
          <p>Hi there, I&apos;m</p>
          <h1>Haruka Ogino</h1>
          <p>Full-stack Developer</p>
        </section>
        <aside className="sections">
          <button>About Me</button>
          <button>Projects</button>
          {/* <button>Blog Entries</button> */}
        </aside>
        <About />
        <Projects />
      </div>
    </main>
  )
}
