import type { NextPage } from 'next';

import { Center } from '@/components/ui/';

import Intro from '@/components/pages/about/Intro';

const About: NextPage = () => {
  return (
    <Center>
      <Intro />
    </Center>
  );
};

export default About;
