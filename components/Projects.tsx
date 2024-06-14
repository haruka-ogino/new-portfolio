'use client'
// pages/Projects.tsx

import { IProject, Project } from '@/models/projects' // Adjust the path as needed
import '../styles/about.css'
import { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const [projects, setProjects] = useState<IProject[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects')
        if (!response.ok) {
          throw new Error(
            `Failed to fetch projects - ${response.status} ${response.statusText}`
          )
        }
        const data: IProject[] = await response.json()
        setProjects(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching projects:', error)
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  console.log(projects)

  return (
    <section className="projects">
      <div>
        <h1>My Projects</h1>
        <ul>
          {projects.map((project) => (
            <li key={project._id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
