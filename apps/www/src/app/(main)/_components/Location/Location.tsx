'use client';

import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

export const Location = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const phi = 0;
    let width = 0;

    const onResize = () => {
      if (canvasRef.current && (width = canvasRef.current.offsetWidth)) {
        window.addEventListener('resize', onResize);
      }
    };
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2 * 0.4,
      phi: -0.1,
      theta: -0.13,
      dark: 1,
      diffuse: 3,
      mapSamples: 12_000,
      mapBrightness: 2,
      baseColor: [0.8, 0.8, 0.8],
      markerColor: [1, 1, 1],
      glowColor: [0.2, 0.2, 0.2],
      markers: [{ location: [19.4305305, -99.146796], size: 0.1 }],
      scale: 2.5,
      offset: [0, width * 2 * 0.4 * 0.13],
      onRender: (state) => {
        state.phi = phi;
        state.width = width * 2;
        state.height = width * 2 * 0.4;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className='max-h-[204px] w-full overflow-hidden'>
      <h4 className='px-8 pt-8 font-serif text-lg text-grey-text'>
        CMDX, Mexico
      </h4>

      <div className='relative mx-auto aspect-square h-full w-full'>
        <canvas
          ref={canvasRef}
          style={{
            width: '100%',
            height: '100%',
            contain: 'layout paint size',
            cursor: 'auto',
            userSelect: 'none',
          }}
        />
      </div>
    </div>
  );
};
