import { motion } from 'framer-motion';

import { MotionSvg } from '../ui';
import { coreVariants, raysVariants, whileTap } from 'animations/toggleTheme';

const Sun = ({ ...props }) => {
  return (
    <MotionSvg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      whileTap={whileTap}
      {...props}
    >
      <motion.circle
        cx='11.9998'
        cy='11.9998'
        r='5.75375'
        fill='currentColor'
        variants={coreVariants}
        initial='initial'
        animate='animate'
      />

      <motion.g initial='initial' animate='animate' variants={raysVariants}>
        <circle
          cx='3.08982'
          cy='6.85502'
          r='1.71143'
          transform='rotate(-60 3.08982 6.85502)'
          fill='currentColor'
        />
        <circle
          cx='3.0903'
          cy='17.1436'
          r='1.71143'
          transform='rotate(-120 3.0903 17.1436)'
          fill='currentColor'
        />
        <circle cx='12' cy='22.2881' r='1.71143' fill='currentColor' />
        <circle
          cx='20.9101'
          cy='17.1436'
          r='1.71143'
          transform='rotate(-60 20.9101 17.1436)'
          fill='currentColor'
        />
        <circle
          cx='20.9101'
          cy='6.8555'
          r='1.71143'
          transform='rotate(-120 20.9101 6.8555)'
          fill='currentColor'
        />
        <circle cx='12' cy='1.71143' r='1.71143' fill='currentColor' />
      </motion.g>
    </MotionSvg>
  );
};

export default Sun;
