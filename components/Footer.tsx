import {
  FaLinkedin,
  FaGithubSquare,
  FaFileAlt,
  FaEnvelope,
} from 'react-icons/fa'
import '../styles/footer.css'
export default function Footer() {
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
      <footer>
        <section className="contact-info">
          <h3>Haruka Ogino</h3>
          <h4>Full-stack Developer</h4>
        </section>
        <section className="footer-links">
          <a
            href="mailto:harukariq@gmail.com"
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: '2px' }}
          >
            <FaEnvelope size={24} />
            <p style={{ marginLeft: '2px' }}>{'harukariq@gmail.com'}</p>
          </a>
          {links.map((link, i) => (
            <a key={i} href={link.link}>
              {link.name === 'LinkedIn' && <FaLinkedin size={28} />}
              {link.name === 'GitHub' && <FaGithubSquare size={28} />}
              {link.name === 'CV' && (
                <FaFileAlt
                  size={25}
                  style={{ marginLeft: '1.5px', marginRight: '1.5px' }}
                />
              )}
              <p>{link.name}</p>
            </a>
          ))}
        </section>

        <section>
          <h2>This portfolio was built using:</h2>
          <ul>
            <li>
              <img
                src="https://img.shields.io/badge/React-black?style=fflat-square&logo=react"
                alt="react js banner"
              />
            </li>
            <li>
              <img
                src="https://img.shields.io/badge/Tailwind_CSS-black?style=fflat-square&logo=tailwind-css&logoColor=38B2AC"
                alt="tailwind banner"
              />
            </li>
            <li>
              <img
                src="https://img.shields.io/badge/Next.js-black?style=fflat-square&logo=nextdotjs&logoColor=white"
                alt="next js banner"
              />
            </li>
            <li>
              <img
                src="https://img.shields.io/badge/MongoDB-black?style=fflat-square&logo=mongodb"
                alt="mongoDB banner"
              />
            </li>
          </ul>
        </section>
      </footer>
    </>
  )
}
