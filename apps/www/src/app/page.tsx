import type { NextPage } from 'next';

import { projects } from '~/app/_config/projects';
import { Hero } from './_components/Hero';
import {
  Project,
  ProjectContent,
  ProjectDescription,
  ProjectImage,
  ProjectTitle,
} from './_components/Project';
import {
  Section,
  SectionDescription,
  SectionTitle,
} from './_components/Section';

const Home: NextPage = () => {
  return (
    <div className='min-h-screen'>
      <Hero />

      <Section>
        <SectionTitle>Work</SectionTitle>
        <SectionDescription>
          A look at what's keeping me busy
        </SectionDescription>
      </Section>

      {projects.map(({ name, description }) => (
        <Project key={name}>
          <ProjectContent>
            <ProjectTitle>{name}</ProjectTitle>
            <ProjectDescription>{description}</ProjectDescription>
          </ProjectContent>

          <ProjectImage />
        </Project>
      ))}
    </div>
  );
};

export default Home;
