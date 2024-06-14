export default function Nav() {
  return (
    <nav id="nav" className="sections">
      <button>Home</button>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        Back to the top
      </button>
      <button>My GitHub</button>
      <button>My LinkedIn</button>
      <button>My CV</button>
    </nav>
  )
}
