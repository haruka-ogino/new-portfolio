import { blogEntries } from '@/public/blogs'
import '../../../styles/blog.css'

const BlogPost = ({ params }: { params: { id: string } }) => {
  const blogId = Number(params.id) - 1
  return (
    <main className="main">
      <h1>{blogEntries[blogId].title}</h1>
      <h4 style={{ marginLeft: '2em' }}>
        <em>posted on {blogEntries[blogId].date}</em>
      </h4>
      <p
        dangerouslySetInnerHTML={{
          __html: blogEntries[blogId].text.replace(/\n/g, '<br>'),
        }}
      />
      {blogEntries[blogId].images?.map((image, i) => (
        <img src={image.link} alt={image.description} />
      ))}
    </main>
  )
}

export default BlogPost
