import { clsx } from 'clsx/lite';

import { fadeUp } from '~/config/animations';

export const ProjectImage = () => {
  return (
    <div className={clsx('col-span-2', fadeUp)}>
      <figure className='relative z-[1] scale-90 shadow shadow-black-a1'>
        <div className='aspect-video h-full w-full bg-grey-bg' />
      </figure>
    </div>
  );
};
