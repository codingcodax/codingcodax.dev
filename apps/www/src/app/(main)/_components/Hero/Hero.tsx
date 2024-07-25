import clsx from 'clsx';

import { fadeUp } from '~/config/animations';

type Props = { children: React.ReactNode };

export const Hero = ({ children }: Props) => {
  return (
    <div className='relative flex min-h-[50vh] items-center justify-center border-b border-grey-line bg-grey-base'>
      <div className={clsx('border border-grey-line px-8 py-4', fadeUp)}>
        <h1 className='w-min text-center font-serif text-6xl font-bold'>
          {children}
        </h1>
      </div>
    </div>
  );
};
