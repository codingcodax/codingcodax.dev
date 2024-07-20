import type { NextPage } from 'next';

import { Hero } from '~/app/(main)/_components/Hero';
import {
  Project,
  ProjectContent,
  ProjectDescription,
  ProjectImage,
  ProjectTitle,
} from '~/app/(main)/_components/Project';
import { projects } from '~/config/projects';

const Work: NextPage = () => {
  return (
    <main>
      <Hero>Work</Hero>

      {projects.map(({ name, description }) => (
        <Project key={name}>
          <ProjectContent>
            <ProjectTitle>{name}</ProjectTitle>
            <ProjectDescription>{description}</ProjectDescription>
          </ProjectContent>

          <ProjectImage />
        </Project>
      ))}
    </main>
  );
};

export default Work;
