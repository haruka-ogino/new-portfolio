import '../styles/home.css'
import { FaLinkedin, FaGithubSquare, FaFileAlt } from 'react-icons/fa'
import { IoLanguage } from 'react-icons/io5'
import { TbDog } from 'react-icons/tb'
import { FaLaptopCode } from 'react-icons/fa'
import { PiCookingPotBold } from 'react-icons/pi'
import { RiTreeLine } from 'react-icons/ri'

export default function About() {
  const links = [
    {
      name: 'LinkedIn',
      link: 'https://nz.linkedin.com/in/haruka-ogino-769540148',
    },
    { name: 'GitHub', link: 'https://github.com/haruka-ogino' },
    { name: 'CV', link: '/Haruka-Ogino-CV.pdf' },
  ]

  return (
    <>
      <section className="intro">
        <p>Hi there, I&apos;m</p>
        <h1>Haruka Ogino</h1>
        <p>Full-stack Developer</p>
      </section>
      <div className="about-me">
        <img src="/headshot.png" />
        <div>
          <p>
            I am a full-stack developer dedicated to personal and professional
            growth. Having transitioned from civil engineering, I have
            discovered a deep passion for coding. The ability to solve problems
            and bring ideas to life with just a few keystrokes fuels my
            creativity and ambition. I am currently seeking a software
            development role where I can contribute to dynamic teams, further
            develop my expertise in full-stack development, and continue to
            inspire and encourage women to pursue careers in STEM, especially in
            software engineering.{' '}
          </p>

          <section className="my-links">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.link}
                style={{ display: 'flex', alignItems: 'flex-end' }}
              >
                {link.name === 'LinkedIn' && <FaLinkedin size={28} />}
                {link.name === 'GitHub' && <FaGithubSquare size={28} />}
                {link.name === 'CV' && <FaFileAlt size={25} />}
                <p style={{ fontSize: '18px' }}>{link.name}</p>
              </a>
            ))}
          </section>
        </div>
      </div>
      <br />
      <h2>My interests are...</h2>
      <section className="my-interests">
        <div className="interest">
          <FaLaptopCode size={28} />
          <h4>Learning new tech</h4>
        </div>
        <div className="interest">
          <IoLanguage size={28} />
          <h4>Languages</h4>
        </div>
        <div className="interest">
          <TbDog size={28} />
          <h4>Pets</h4>
        </div>
        <div className="interest">
          <PiCookingPotBold size={28} />
          <h4>Cooking</h4>
        </div>
        <div className="interest">
          <RiTreeLine size={28} />
          <h4>Taking walks</h4>
        </div>
      </section>
    </>
  )
}
