import { connectToDB } from '@/utils/database'
import { Project } from '@/models/projects'

export const GET = async (req: Request) => {
  try {
    await connectToDB()
    const projects = await Project.find({})

    return new Response(JSON.stringify(projects), { status: 200 })
  } catch (error) {
    return new Response('Failed to fetch projects', { status: 500 })
  }
}
