import Link from 'next/link'
import '../../styles/nav.css'
import '../../styles/home.css'
import BlogNav from '@/components/BlogNav'

export default function layout({ children }: any) {
  return (
    <>
      <BlogNav />
      <div
        style={{
          margin: '0em 2em',
        }}
      >
        {children}
      </div>
    </>
  )
}
