import type { NextPage } from 'next';

import { Center } from '@/components/ui/';

import Intro from '@/components/pages/about/Intro';
import ToolsAndTechnologies from '@/components/pages/about/tools-and-technologies';

const About: NextPage = () => {
  return (
    <Center css={{ flexDirection: 'column' }}>
      <Intro />
      <ToolsAndTechnologies />
    </Center>
  );
};

export default About;
