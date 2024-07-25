import { clsx } from 'clsx/lite';

import { fadeUp } from '~/config/animations';
import { api } from '~/trpc/server';

export const CodingHours = async () => {
  const { hours, minutes } = await api.wakatime.getTime();

  return (
    <div className={clsx('space-y-4 p-6 sm:p-8', fadeUp)}>
      <h4 className='font-serif text-lg text-grey-text'>Coding hours</h4>
      <p className='text-xl font-medium sm:text-2xl md:text-3xl'>
        {hours} hrs {minutes} mins
      </p>
    </div>
  );
};
