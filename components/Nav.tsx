import '../styles/nav.css'

export default function Nav() {
  return (
    <nav id="nav" className="nav">
      <button className="buttons">Home</button>
      <button className="buttons">Back to the top</button>
      <button className="buttons">My GitHub</button>
      <button className="buttons">My LinkedIn</button>
      <button className="buttons">My CV</button>
    </nav>
  )
}

// onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
