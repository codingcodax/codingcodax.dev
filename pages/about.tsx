import type { NextPage } from 'next';

import { Box } from '@/components/ui/';

import Seo from '@/components/common/Seo';
import Intro from '@/components/pages/about/Intro';
import ToolsAndTechnologies from '@/components/pages/about/tools-and-technologies';
import GetInTouch from '@/components/pages/about/get-in-touch';

const About: NextPage = () => {
  return (
    <Box
      align='center'
      css={{ w: '$full', maxWidth: '800px', flexDirection: 'column' }}
    >
      <Seo name='About 👨‍💻' path='/about' />

      <Intro />
      <ToolsAndTechnologies />
      <GetInTouch />
    </Box>
  );
};

export default About;
