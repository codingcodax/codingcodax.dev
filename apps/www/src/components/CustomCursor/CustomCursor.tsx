'use client';

import AnimatedCursor from 'react-animated-cursor';

import { useDeviceDetection } from '~/hooks/useDeviceDetection';

export const CustomCursor = () => {
  const device = useDeviceDetection();

  if (device === 'Mobile' || device === 'Tablet') return null;

  return (
    <AnimatedCursor
      innerScale={1}
      innerSize={8}
      innerStyle={{
        backgroundColor: 'var(--cursor-color)',
      }}
      outerAlpha={0.2}
      outerScale={4}
      outerSize={12}
      outerStyle={{
        backgroundColor: 'var(--cursor-color)',
        mixBlendMode: 'exclusion',
      }}
    />
  );
};
