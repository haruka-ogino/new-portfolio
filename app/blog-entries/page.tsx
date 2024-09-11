'use client'
import '../../styles/blog.css'
import { useRouter } from 'next/navigation'
import { blogEntries } from '@/public/blogs'

export default function BlogEntries() {
  const router = useRouter()

  return (
    <main className="main">
      {' '}
      <h1>My Blog Entries</h1>
      <ul className="blog-entries">
        {blogEntries.map((blog, i) => (
          <li className="blog-item">
            <div
              className="blog-entry"
              onClick={() => router.push(`/blog-entries/${i + 1}`)}
            >
              <h2>{blog.title}</h2>
              <h4 style={{ marginLeft: '2em' }}>
                <em>posted on {blog.date}</em>
              </h4>
            </div>
          </li>
        ))}
      </ul>
      {/* <div className="test-box">
        <p>hello</p>
        <p>hello</p>
      </div>
      <div className="test-box2">
        <p>hello</p>
        <p style={{ justifySelf: 'flex-start' }}>hello</p>
      </div> */}
    </main>
  )
}
