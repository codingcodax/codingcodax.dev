import type { NextPage } from 'next';
import Link from 'next/link';

import { Button } from '@acme/ui/Button';

import { projects } from '~/config/projects';
import { CodingHours } from './_components/CodingHours';
import { ContactMe } from './_components/ContactMe';
import { Intro } from './_components/Intro';
import { Location } from './_components/Location';
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
import { TechStack } from './_components/TechStack';

const Home: NextPage = () => {
  return (
    <div className='min-h-screen'>
      <Intro />

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

      <div className='grid grid-cols-3 py-6'>
        <div className='col-start-2 flex items-center justify-center'>
          <Button asChild>
            <Link href='/work'>See all projects</Link>
          </Button>
        </div>
      </div>

      <Section>
        <SectionTitle>About me</SectionTitle>
        <SectionDescription>A sneak peek of who I am</SectionDescription>
      </Section>

      <div className='relative grid grid-cols-3 border-b border-grey-line'>
        <TechStack />
        <CodingHours />
        <Location />
      </div>

      <ContactMe variant='expanded' />
    </div>
  );
};

export default Home;
