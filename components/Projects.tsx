'use client'
import '../styles/home.css'

import { IProject } from '@/models/projects'
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
    <>
      <>
        <h1>My Projects</h1>
      </>
      <ul>
        {projects.map((project, i) => (
          <li key={i + 1} className="project">
            <ProjectCard project={project} i={i} />
          </li>
        ))}
      </ul>
    </>
  )
}
