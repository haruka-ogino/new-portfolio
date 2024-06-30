import {
  FaLinkedin,
  FaGithubSquare,
  FaFileAlt,
  FaEnvelope,
} from 'react-icons/fa'
import '../styles/footer.css'
import { useRef } from 'react'
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
      <footer id="footer">
        <div style={{ marginRight: '8em' }}>
          <section className="name">
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
              <p style={{ marginLeft: '5px' }}>harukariq@gmail.com</p>
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
                <p style={{ marginLeft: '3px' }}>{link.name}</p>
              </a>
            ))}
          </section>
        </div>
        <div>
          <section style={{ margin: '0em 2em' }}>
            <h4 style={{ marginBottom: '0.5em' }}>Website's GitHub Repo:</h4>
            <a
              id="gh-link"
              href="https://github.com/haruka-ogino/new-portfolio"
            >
              <img
                src="https://img.shields.io/badge/GitHub-224756?style=fflat-square&logo=github"
                alt="github banner as a link this site's repo"
              />
            </a>
          </section>
          <section style={{ margin: '0em 2em' }}>
            <h4 style={{ marginBottom: '0.5em' }}>
              This portfolio was built using:
            </h4>
            <ul>
              <li>
                <img
                  src="https://img.shields.io/badge/React-224756?style=fflat-square&logo=react"
                  alt="react js banner"
                />
              </li>
              <li>
                <img
                  src="https://img.shields.io/badge/Tailwind_CSS-224756?style=fflat-square&logo=tailwind-css&logoColor=38B2AC"
                  alt="tailwind banner"
                />
              </li>
              <li>
                <img
                  src="https://img.shields.io/badge/Next.js-224756?style=fflat-square&logo=nextdotjs&logoColor=white"
                  alt="next js banner"
                />
              </li>
              <li>
                <img
                  src="https://img.shields.io/badge/MongoDB-224756?style=fflat-square&logo=mongodb"
                  alt="mongoDB banner"
                />
              </li>
            </ul>
          </section>
        </div>
      </footer>
    </>
  )
}
