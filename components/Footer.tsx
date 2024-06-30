import { FaLinkedin, FaGithubSquare, FaFileAlt } from 'react-icons/fa'
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
        <section className="footer-links">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.link}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginRight: '15px',
              }}
            >
              {link.name === 'LinkedIn' && <FaLinkedin size={28} />}
              {link.name === 'GitHub' && <FaGithubSquare size={28} />}
              {link.name === 'CV' && <FaFileAlt size={25} />}
              <p style={{ fontSize: '18px' }}>{link.name}</p>
            </a>
          ))}
        </section>
        {/* <h1>Haruka Ogino</h1> */}
      </footer>
    </>
  )
}
