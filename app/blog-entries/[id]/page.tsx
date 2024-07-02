import { useRouter } from 'next/router'

const BlogPost = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <p>hello</p>
    </div>
  )
}

export default BlogPost

// export const BlogPost = () => {
//   // const router = useRouter()
//   // const { id } = router.query
//   // console.log('hellloooo' + router.query + 'query')

//   return <>Hello</>
// }

// pages/blog-entries/[id].tsx

// import { useRouter } from 'next/router'
// import { blogEntries } from '../page'
