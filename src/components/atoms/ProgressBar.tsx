import { motion, useViewportScroll } from 'framer-motion';

import { Box } from '~/components/ui';

const BoxFramer = motion(Box);

const ProgressBar = () => {
  const { scrollYProgress } = useViewportScroll();

  return (
    <Box
      css={{
        height: '5px',
        w: '$full',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '$sticky',
      }}
    >
      <BoxFramer
        css={{ h: '$full', w: '$full', overflow: 'hidden', bg: '$violet4' }}
      >
        <BoxFramer
          css={{
            height: 'inherit',
            width: 'inherti',
            bg: '$primary',
            transformOrigin: '0% 100%',
            transition: 'transform 0.2s ease-in-out',
          }}
          style={{ scaleX: scrollYProgress }}
        />
      </BoxFramer>
    </Box>
  );
};

export default ProgressBar;
