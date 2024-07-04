import { BlogEntry } from '../../../models/blog'
import { blogEntries } from '@/public/blogs'

const BlogPost = ({ params }: { params: { id: string } }) => {
  const blogId = Number(params.id) - 1
  return (
    <div>
      <h1>{blogEntries[blogId].title}</h1>
      <p>Content of blog post with ID: {blogId}</p>
    </div>
  )
}

export default BlogPost
