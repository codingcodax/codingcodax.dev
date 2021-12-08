import projects from '@/data/projects';

import { Box } from '@/components/ui';

import ProjectCard from './ProjectCard';

const Projects = ({ featured = false }) => {
  const projectsArray = featured
    ? projects.filter(({ featured }) => featured)
    : projects;

  return (
    <Box
      as='ul'
      css={{
        maxWidth: '1000px',
        display: 'grid',
        gridTemplate: 'auto / 1fr',
        gridGap: '$8',
        '@bp2': { gridTemplate: 'auto / 1fr 1fr' },
      }}
    >
      {projectsArray.map((projectItem) => (
        <ProjectCard key={projectItem.title} {...projectItem} />
      ))}
    </Box>
  );
};

export default Projects;
