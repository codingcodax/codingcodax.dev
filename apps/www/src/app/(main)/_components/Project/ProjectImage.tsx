import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { clsx } from 'clsx/lite';

import { fadeUp } from '~/config/animations';

type Props = { image: StaticImageData; alt: string };

export const ProjectImage = ({ image, alt }: Props) => {
  return (
    <div className={clsx('col-span-2 pl-px', fadeUp)}>
      <figure className='relative z-[1] scale-90 grayscale transition-transform group-hover:scale-100'>
        <Image
          alt={alt}
          className='aspect-video h-full w-full bg-grey-bg'
          placeholder='blur'
          src={image}
        />
      </figure>
    </div>
  );
};
