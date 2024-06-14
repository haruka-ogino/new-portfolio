import '../styles/nav.css'

export default function Nav() {
  return (
    <nav id="nav" className="nav sections">
      <button>Home</button>
      <button>Back to the top</button>
      <button>My GitHub</button>
      <button>My LinkedIn</button>
      <button>My CV</button>
    </nav>
  )
}

// onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
