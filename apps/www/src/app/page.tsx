import type { NextPage } from 'next';

import { Hero } from './_components/Hero';
import { Section } from './_components/Section';
import { SectionDescription } from './_components/Section/SectionDescription';
import { SectionTitle } from './_components/Section/SectionTitle';

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
