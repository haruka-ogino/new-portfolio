import { IProject } from '@/models/projects'
import '../styles/home.css'

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
        <p>{project.description}</p>
        <p className="tech-stack">{techStack}</p>
      </div>
      <div className="project-visuals">
        {/* <img src="/projects/lucas-mansion.gif" alt="placeholder for all" /> */}
        <br />
        <div className="project-links">
          <a href={project.githubRepo}>GitHub Repo</a>
          <a href={project.deployedLink}>Deployed Link</a>
        </div>
      </div>
    </>
  )
}
