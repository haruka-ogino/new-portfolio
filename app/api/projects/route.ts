import { NextApiRequest, NextApiResponse } from 'next'
import { getProjects } from '@/lib/store'
import { Project } from '@/models/projects'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Project[] | { error: string }>
) {
  if (req.method === 'GET') {
    try {
      const data = await getProjects()
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch projects' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
