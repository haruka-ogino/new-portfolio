'use client'
import '../styles/home.css'

import { IProject } from '@/models/projects'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'

interface Props {
  setShow: Dispatch<SetStateAction<boolean>>
  setTitle: Dispatch<SetStateAction<string>>
  setPopupContent: Dispatch<SetStateAction<JSX.Element>>
}

export default function Projects({
  setShow,
  setTitle,
  setPopupContent,
}: Props) {
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
            <ProjectCard
              project={project}
              i={i}
              setShow={setShow}
              setTitle={setTitle}
              setPopupContent={setPopupContent}
            />
          </li>
        ))}
      </ul>
    </>
  )
}
