import { IProject } from '@/models/projects'
import '../styles/home.css'
import {
  FaGithubSquare,
  FaRegHandPointUp,
  FaRegPlayCircle,
} from 'react-icons/fa'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  project: IProject
  i: number

  setShow: Dispatch<SetStateAction<boolean>>
  setTitle: Dispatch<SetStateAction<string>>
  setPopupContent: Dispatch<SetStateAction<JSX.Element>>
}

export default function ProjectCard({
  project,
  i,
  setShow,
  setTitle,
  setPopupContent,
}: Props) {
  const tech = project.techstack
  const techStack = tech.split(', ')

  function openPopup(clicked: string) {
    setShow(true)
    let content
    if (clicked === 'deployment') {
      content = (
        <p>
          This project is currently undergoing development and has yet to be
          deployed.
        </p>
      )
    } else if (clicked === 'video') {
      content = (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xASQR-xurMI"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )
    }
    if (content) setPopupContent(content)
    setTitle(project.title)
  }

  return (
    <>
      <div className={`project-info ${i % 2 === 1 && 'reverse-text'}`}>
        <h3>{project.type}</h3>
        <h2>{project.title}</h2>
        <p className={`${i % 2 === 1 && 'reverse-desc'}`}>
          {project.description}
        </p>
        <ul className={`tech-stack  ${i % 2 === 1 && 'reverse-stack'}`}>
          {techStack.map((tech: string, i: number) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
      </div>
      <div className={`project-visuals ${i % 2 === 0 && 'reverse-visuals'}`}>
        <img src={project.img} alt={project.alt} />
        <div className="project-links">
          {project.title === 'Film Dori' && (
            <div onClick={() => openPopup('video')} style={{ display: 'flex' }}>
              <FaRegPlayCircle size={24} />
              <p style={{ marginLeft: '1px' }}>Demo</p>
            </div>
          )}
          <a
            href={project.githubRepo}
            className="project-link"
            style={{ marginRight: '15px' }}
          >
            <FaGithubSquare size={25} />
            <p>GitHub</p>
          </a>
          {project.deployedLink !== '' ? (
            <a href={project.deployedLink} className="project-link">
              <FaRegHandPointUp size={20} />
              <p>Deployed Link</p>
            </a>
          ) : (
            <div
              onClick={() => openPopup('deployment')}
              style={{ display: 'flex' }}
            >
              <FaRegHandPointUp size={20} />
              <p>Deployed Link</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
