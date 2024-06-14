import { IProject } from '@/models/projects'
import '../styles/about.css'

interface Props {
  project: IProject
}

export default function ProjectCard({ project }: Props) {
  return (
    <>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <a href={project.githubRepo}>GitHub Repo</a>
      <br />
      <a href={project.deployedLink}>Deployed Link</a>
      <br />
      <img src={project.img} alt={project.alt} />
    </>
  )
}
