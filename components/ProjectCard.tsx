import { IProject } from '@/models/projects'
import '../styles/home.css'
import { FaGithubSquare } from 'react-icons/fa'
import { FaRegHandPointUp } from 'react-icons/fa'

interface Props {
  project: IProject
  i: number
}

export default function ProjectCard({ project, i }: Props) {
  // declare some placeholders
  // const techStack = ['React', 'Node.js', 'Tailwind']
  const techStack = ['React, Node.js, Tailwind']
  const type = 'Group project'

  return (
    <>
      <div className={`project-info ${i % 2 === 1 && 'reverse-text'}`}>
        <h3>{type}</h3>
        <h2>{project.title}</h2>
        <p className={`${i % 2 === 1 && 'reverse-desc'}`}>
          {project.description}
        </p>
        <p className="tech-stack">{techStack}</p>
      </div>
      <div className={`project-visuals ${i % 2 === 0 && 'reverse-visuals'}`}>
        <img src="/projects/lucas.gif" alt="placeholder for all" />
        <div className="project-links">
          <a
            href={project.githubRepo}
            className="project-link"
            style={{ marginRight: '15px' }}
          >
            <FaGithubSquare size={25} />
            GitHub
          </a>
          <a href={project.deployedLink} className="project-link">
            <FaRegHandPointUp size={20} />
            Deployed Link
          </a>
        </div>
      </div>
    </>
  )
}
