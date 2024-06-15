import { IProject } from '@/models/projects'
import '../styles/home.css'

interface Props {
  project: IProject
}

export default function ProjectCard({ project }: Props) {
  // declare some placeholders
  const techStack = ['React', 'Node.js', 'Tailwind']
  return (
    <>
      <div className="project-info">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
      <div className="project-visuals">
        <img
          src="https://www.ghibli-museum.jp/en/img/mainimg.png"
          alt="placeholder for all"
        />
        <br />
        <a href={project.githubRepo}>GitHub Repo</a>
        <br />
        <a href={project.deployedLink}>Deployed Link</a>
        <br />
      </div>
    </>
  )
}
