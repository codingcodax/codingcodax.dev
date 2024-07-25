import { clsx } from 'clsx/lite';

import { fadeUp } from '~/config/animations';

type Props = { children: React.ReactNode };

export const ProjectContent = ({ children }: Props) => {
  return (
    <div
      className={clsx(
        'flex flex-col justify-center gap-2 border-b border-dashed border-grey-line bg-grey-base p-6 sm:p-8 md:border-b-0',
        fadeUp,
      )}
    >
      {children}
    </div>
  );
};
