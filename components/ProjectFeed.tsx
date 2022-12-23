import Project from '@/lib/types/Project'
import { FC } from 'react'
import ExternalLink from './ExternalLink'
import FeedTag from './FeedTag'

interface Props {
  projects: Project[]
}

const ProjectFeed: FC<Props> = ({ projects }) => {
  return (
    <>
      {projects.map((project, key) => (
        <div key={key}>
          <h2 className="text-2xl font-bold">{project.name}</h2>
          <div className="flex space-x-1 sm:space-x-2 text-xs sm:text-sm text-primary-500">
            {project.technologies.map((technology, key) => (
              <FeedTag key={key}>{technology}</FeedTag>
            ))}
          </div>
          <p className="md:text-lg mt-1">{project.description}</p>
          <div className="flex space-x-0.5 items-center">
            <ExternalLink href={project.url}>Live preview</ExternalLink>
          </div>
        </div>
      ))}
    </>
  )
}

export default ProjectFeed
