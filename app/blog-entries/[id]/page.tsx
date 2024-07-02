const BlogPost = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1>Blog Post {params.id}</h1>
      <p>Content of blog post with ID: {params.id}</p>
    </div>
  )
}

export default BlogPost
