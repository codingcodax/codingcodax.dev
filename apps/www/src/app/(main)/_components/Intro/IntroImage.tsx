import Image from 'next/image';
import { clsx } from 'clsx/lite';

import { fadeUp } from '~/config/animations';

export const IntroImage = () => {
  return (
    <div className={clsx('relative', fadeUp)}>
      <figure>
        <Image
          alt='codingcodax avatar'
          className='rounded-full grayscale'
          height={100}
          src='https://avatars.githubusercontent.com/u/48135533?v=4'
          width={100}
        />
      </figure>

      <div className='absolute -left-[calc(100%+4px)] top-1/2 h-px w-[100px] bg-grey-border-hover' />
      <div className='absolute -right-[calc(100%+4px)] top-1/2 h-px w-[100px] bg-grey-border-hover' />

      <div className='absolute -left-[4px] -top-[4px] h-[108px] w-[108px] rounded-full border border-grey-border-hover' />
      <div className='absolute -left-[8px] -top-[8px] h-[116px] w-[116px] rounded-full border border-grey-border' />
      <div className='absolute -left-[12px] -top-[12px] h-[124px] w-[124px] rounded-full border border-grey-line' />
    </div>
  );
};
