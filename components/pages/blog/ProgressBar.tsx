import { motion, useViewportScroll } from 'framer-motion';

import { Box } from '@/components/ui';

const BoxFramer = motion(Box);

const ProgressBar = () => {
  const { scrollYProgress } = useViewportScroll();

  return (
    <Box
      css={{
        h: '$1',
        w: '$full',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '$sticky',
      }}
    >
      <BoxFramer
        css={{ h: '$full', w: '$full', overflow: 'hidden', bg: '$violet5' }}
      >
        <BoxFramer
          css={{
            height: 'inherit',
            width: 'inherti',
            bg: '$primary',
            transformOrigin: '0% 100%',
          }}
          style={{ scaleX: scrollYProgress }}
        />
      </BoxFramer>
    </Box>
  );
};

export default ProgressBar;
