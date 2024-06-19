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

  function firstItem(index: number) {
    if (index === 0) {
      return { border: 'none' }
    }
  }

  return (
    <>
      <>
        <h1>My Projects</h1>
      </>
      <ul>
        {projects.map((project, i) => (
          <li
            key={i + 1}
            className={`project ${i % 2 === 1 ? 'reverse' : ''}`}
            style={firstItem(i)}
          >
            <ProjectCard project={project} i={i} />
          </li>
        ))}
        {/* <li>
          THIS IS HELLLLLTHIS IS HELLLLLTHIS IS HELLLLLTHIS IS HELLLLLTHIS IS
          HELLLLLTHIS IS HELLLLL
        </li>
        <li>
          THIS IS HELLTHIS IS HELLLLLTHIS IS HELLLLLTHIS IS HELLLLLTHIS IS
          HELLLLLLLL
        </li>
        <li>
          THISTHIS ISTHIS IS HELLLLLTHIS IS HELLLLL HELLLLLTHIS IS HELLLLLTHIS
          IS HELLLLL IS HELLLLL
        </li>
        <li>
          TTHIS IS HELLLLLTHIS IS HELLLLLHIS ITHIS IS HELLLLLTHIS IS HELLLLLTHIS
          IS HELLLLLS HELLLLL
        </li> */}
      </ul>
    </>
  )
}
