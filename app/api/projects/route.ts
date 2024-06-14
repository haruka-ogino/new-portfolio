import { NextApiRequest, NextApiResponse } from 'next'
import { getProjects } from '@/lib/store'
import { Project } from '@/models/projects'

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse<Project[] | { error: string }>
) {
  try {
    const data = await getProjects()
    res.status(200).json(data)
  } catch (error) {
    console.error('Failed to fetch projects:', error)
    res.status(500).json({ error: 'Failed to fetch projects' })
  }
}
