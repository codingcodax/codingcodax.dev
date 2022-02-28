import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { scrollVariants } from '~/animations/backToTop';
import { useHasMounted, useMediaQuery } from '~/hooks';
import { ArrowUpIcon } from '~/components/icons';
import { Button } from '~/components/ui';

const scrollToTop = () => {
  try {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  } catch (error) {
    window.scrollTo(0, 0);
  }
};

const SCROLL_OFFSET = 200;

const MotionButton = motion(Button);

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const isMobileSize = useMediaQuery('(max-width: 450px)');
  const hasMounted = useHasMounted();

  const checkScrollTop = useCallback(() => {
    if (!hasMounted) return;

    const scrolledDistance = window.scrollY || window.pageYOffset;
    const screenHeight = document.body.scrollHeight - window.screen.availHeight;

    try {
      setShowButton(
        scrolledDistance > SCROLL_OFFSET &&
          scrolledDistance < screenHeight - Math.ceil(SCROLL_OFFSET / 2.5)
      );
    } catch (e) {
      console.error(e);
    }
  }, [hasMounted]);

  useEffect(() => {
    if (!hasMounted) return;

    window.addEventListener('scroll', checkScrollTop);
    checkScrollTop();

    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [hasMounted, checkScrollTop]);

  return (
    <AnimatePresence>
      {showButton && (
        <MotionButton
          animate='show'
          css={{
            display: 'flex',
            alignItems: 'center',
            position: 'fixed',
            bottom: '$4',
            right: '$4',
          }}
          exit='exit'
          initial='hidden'
          transition={{ duration: 0.2 }}
          variants={scrollVariants}
          onClick={scrollToTop}
        >
          {!isMobileSize ? 'Back To Top' : null}{' '}
          <ArrowUpIcon css={{ h: '$6', ml: isMobileSize ? '$0' : '$2' }} />
        </MotionButton>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
