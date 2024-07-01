import Link from 'next/link'
import '../../styles/nav.css'
import '../../styles/home.css'

export default function layout({ children }: any) {
  return (
    <>
      <nav className="nav hidden">
        <button className="buttons">
          <Link href="/">← Back to main page</Link>
        </button>
        <button className="buttons">
          <Link href="/blog-entries">My Blog Entries</Link>
        </button>
      </nav>
      {children}
    </>
  )
}
