import { clsx } from 'clsx/lite';

import { fadeUp } from '~/config/animations';
import { IntroImage } from './IntroImage';

export const Intro = () => {
  return (
    <div className='relative flex min-h-[50vh] flex-col items-center justify-center border-b border-grey-line bg-grey-base px-2 pb-4 pt-8'>
      <IntroImage />

      <main
        className={clsx(
          'mt-6 flex flex-col items-center justify-center text-center',
          fadeUp,
        )}
      >
        <h1 className='font-serif text-4xl font-bold sm:text-5xl md:text-6xl'>
          Hi, I'm Alexis
        </h1>
        <h2 className='text-md max-w-lg text-grey-text sm:text-lg'>
          Front-end web wizard who enjoys creating a variety of tools and a
          continuous dedication to learning and self-development.
        </h2>
      </main>
    </div>
  );
};
