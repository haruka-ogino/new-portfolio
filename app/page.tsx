// import Image from 'next/image'
import styles from './page.module.css'

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
      <section className={styles.main} id="intro">
        <div className={styles.intro}>
          <p>Hi there, I&apos;m</p>
          <h1>Haruka Ogino</h1>
          <p>Full-stack Developer</p>
        </div>
        <aside className="sections">
          <button>About Me</button>
          <button>Projects</button>
          <button>Blog Entries</button>
        </aside>
      </section>
    </main>
  )
}
