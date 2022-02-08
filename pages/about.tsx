import type { NextPage } from 'next';

import { MotionBox } from '@/components/ui/';

import { inputVariants } from 'animations/pages';

import Seo from '@/components/common/Seo';
import Intro from '@/components/pages/about/Intro';
import ToolsAndTechnologies from '@/components/pages/about/tools-and-technologies';
import GetInTouch from '@/components/pages/about/get-in-touch';

const About: NextPage = () => {
  return (
    <MotionBox
      align='center'
      css={{ w: '$full', maxWidth: '800px', flexDirection: 'column' }}
      variants={inputVariants}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <Seo name='About 👨‍💻' path='/about' />

      <Intro />
      <ToolsAndTechnologies />
      <GetInTouch />
    </MotionBox>
  );
};

export default About;
