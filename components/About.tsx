import '../styles/home.css'

export default function About() {
  const links = [
    {
      name: 'LinkedIn',
      link: 'https://nz.linkedin.com/in/haruka-ogino-769540148',
    },
    { name: 'GitHub', link: 'https://github.com/haruka-ogino' },
    { name: 'CV', link: '/Haruka-Ogino-CV.pdf' },
  ]

  // window.open('/Haruka-Ogino-CV.pdf', '_blank')

  return (
    <>
      <section className="intro">
        <p>Hi there, I&apos;m</p>
        <h1>Haruka Ogino</h1>
        <p>Full-stack Developer</p>
      </section>
      <div className="about-me">
        <p>
          I am a full-stack developer dedicated to personal and professional
          growth. Having transitioned from civil engineering, I have discovered
          a deep passion for coding. The ability to solve problems and bring
          ideas to life with just a few keystrokes fuels my creativity and
          ambition. I am currently seeking a software development role where I
          can contribute to dynamic teams, further develop my expertise in
          full-stack development, and continue to inspire and encourage women to
          pursue careers in STEM, especially in software engineering.{' '}
        </p>
        <img src="/headshot.png" />
      </div>
      <section className="my-links">
        {links.map((link, i) => (
          <a key={i} href={link.link}>
            {link.name}
          </a>
        ))}
      </section>
    </>
  )
}
