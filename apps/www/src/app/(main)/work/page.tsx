import type { NextPage } from 'next';

import { ContactMe } from '~/app/(main)/_components/ContactMe';
import { Hero } from '~/app/(main)/_components/Hero';
import {
  Project,
  ProjectContent,
  ProjectDescription,
  ProjectImage,
  ProjectTitle,
} from '~/app/(main)/_components/Project';
import {
  Section,
  SectionDescription,
  SectionTitle,
} from '~/app/(main)/_components/Section';
import { projects, sideProjects } from '~/config/projects';

const Work: NextPage = () => {
  return (
    <main>
      <Hero>Work</Hero>

      {projects.map(({ name, description, image, alt, url }) => (
        <Project key={name} href={url}>
          <ProjectContent>
            <ProjectTitle>{name}</ProjectTitle>
            <ProjectDescription>{description}</ProjectDescription>
          </ProjectContent>

          <ProjectImage alt={alt} image={image} />
        </Project>
      ))}

      <Section>
        <SectionTitle>Side projects</SectionTitle>
        <SectionDescription>Creations born from curiosity</SectionDescription>
      </Section>

      {sideProjects.map(({ name, description, image, alt, url }) => (
        <Project key={name} href={url}>
          <ProjectContent>
            <ProjectTitle>{name}</ProjectTitle>
            <ProjectDescription>{description}</ProjectDescription>
          </ProjectContent>

          <ProjectImage alt={alt} image={image} />
        </Project>
      ))}

      <ContactMe variant='collapsed' />
    </main>
  );
};

export default Work;
