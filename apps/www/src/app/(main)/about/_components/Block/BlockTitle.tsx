import { clsx } from 'clsx/lite';

import { fadeUp } from '~/config/animations';

type Props = { children: React.ReactNode };

export const BlockTitle = ({ children }: Props) => {
  return (
    <h2
      className={clsx(
        'border-b border-dashed border-grey-line bg-grey-base p-8 font-serif text-4xl md:border-b-0 lg:text-5xl',
        fadeUp,
      )}
    >
      {children}
    </h2>
  );
};
