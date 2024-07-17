import type { NextPage } from 'next';

import { Hero } from './_components/Hero';
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
        <SectionDescription>My latest projects</SectionDescription>
      </Section>
    </div>
  );
};

export default Home;
