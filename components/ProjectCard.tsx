import { IProject } from '@/models/projects'
import '../styles/home.css'
import { FaGithubSquare } from 'react-icons/fa'
import { FaRegHandPointUp } from 'react-icons/fa'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import PopUp from './ProjectPopup'

interface Props {
  project: IProject
  i: number

  setShow: Dispatch<SetStateAction<boolean>>
  setTitle: Dispatch<SetStateAction<string>>
}

export default function ProjectCard({ project, i, setShow, setTitle }: Props) {
  const techStack = ['React', 'Node.js', 'Tailwind', 'Next.js', 'SQLite']
  // const techStack = ['React, Node.js, Tailwind']
  const type = 'Group project'

  function openPopup() {
    setShow(true)
    setTitle(project.title)
  }

  return (
    <>
      <div className={`project-info ${i % 2 === 1 && 'reverse-text'}`}>
        <h3>{type}</h3>
        <h2>{project.title}</h2>
        <p className={`${i % 2 === 1 && 'reverse-desc'}`}>
          {project.description}
        </p>
        <ul className={`tech-stack  ${i % 2 === 1 && 'reverse-stack'}`}>
          {techStack.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
      </div>
      <div className={`project-visuals ${i % 2 === 0 && 'reverse-visuals'}`}>
        <img
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmY3ZHV2OTFueHl3aTFiMHY2NjJkMDV2bzI0cjNyZWswOHUxZ2U3cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Qj8HrmcHaqlqB76jbq/giphy.gif"
          alt="placeholder for all"
        />

        <div className="project-links">
          <a
            href={project.githubRepo}
            className="project-link"
            style={{ marginRight: '15px' }}
          >
            <FaGithubSquare size={25} />
            GitHub
          </a>
          {project.deployedLink !== '' ? (
            <a href={project.deployedLink} className="project-link">
              <FaRegHandPointUp size={20} />
              Deployed Link
            </a>
          ) : (
            <p onClick={openPopup}>
              <FaRegHandPointUp size={20} />
              Deployed Link
            </p>
          )}
        </div>
      </div>
    </>
  )
}
