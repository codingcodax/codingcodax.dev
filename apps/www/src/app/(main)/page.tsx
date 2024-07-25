import type { NextPage } from 'next';
import Link from 'next/link';

import { Button } from '@acme/ui/Button';

import { fadeUp } from '~/config/animations';
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

      {projects.map(({ name, description, image, alt, url }) => (
        <Project key={name} href={url}>
          <ProjectContent>
            <ProjectTitle>{name}</ProjectTitle>
            <ProjectDescription>{description}</ProjectDescription>
          </ProjectContent>

          <ProjectImage alt={alt} image={image} />
        </Project>
      ))}

      <div className='flex items-center justify-center border-b border-grey-line py-6'>
        <Button asChild className={fadeUp}>
          <Link href='/work'>See all projects</Link>
        </Button>
      </div>

      <Section>
        <SectionTitle>About me</SectionTitle>
        <SectionDescription>A sneak peek of who I am</SectionDescription>
      </Section>

      <div className='relative grid grid-cols-1 divide-y divide-dashed divide-grey-line border-b border-grey-line sm:grid-cols-3'>
        <TechStack />
        <CodingHours />
        <Location />
      </div>

      <ContactMe variant='expanded' />
    </div>
  );
};

export default Home;
