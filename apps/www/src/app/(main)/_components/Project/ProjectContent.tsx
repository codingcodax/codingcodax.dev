import { clsx } from 'clsx/lite';

import { fadeUp } from '~/config/animations';

type Props = { children: React.ReactNode };

export const ProjectContent = ({ children }: Props) => {
  return (
    <div className={clsx('flex flex-col justify-center gap-2 p-8', fadeUp)}>
      {children}
    </div>
  );
};
