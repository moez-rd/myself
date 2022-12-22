import Project from '@/lib/types/Project'
import { FC } from 'react'
import ExternalLink from './ExternalLink'

interface Props {
  projects: Project[]
}

const ProjectFeed: FC<Props> = ({ projects }) => {
  return (
    <>
      {projects.map((project, key) => (
        <div key={key}>
          <h2 className="text-2xl font-bold">{project.name}</h2>
          <div className="flex space-x-2 text-sm text-primary-500">
            {project.technologies.map((technology, key) => (
              <p key={key}>
                <span className="text-secondary-500 font-bold">#</span>
                {technology}
              </p>
            ))}
          </div>
          <p className="text-lg mt-1">{project.description}</p>
          <div className="flex space-x-0.5 items-center">
            <ExternalLink href={project.url}>Live Preview</ExternalLink>
          </div>
        </div>
      ))}
    </>
  )
}

export default ProjectFeed
