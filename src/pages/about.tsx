import type { NextPage } from 'next';

import { inputVariants } from '~/animations/pages';
import { MotionBox } from '~/components/ui/';
import { Seo } from '~/components/atoms';
import {
  AboutIntro as Intro,
  ToolsAndTechnologies,
  GetInTouch,
} from '~/components/containers/sections';

const About: NextPage = () => {
  return (
    <MotionBox
      align='center'
      animate='show'
      css={{ w: '$full', maxWidth: '800px', flexDirection: 'column' }}
      exit='exit'
      initial='hidden'
      variants={inputVariants}
    >
      <Seo name='About 👨‍💻' path='/about' />

      <Intro />
      <ToolsAndTechnologies />
      <GetInTouch />
    </MotionBox>
  );
};

export default About;
