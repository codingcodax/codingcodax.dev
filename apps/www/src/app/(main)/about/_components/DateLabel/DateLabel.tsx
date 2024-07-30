import { clsx } from 'clsx/lite';

import { fadeUp } from '~/config/animations';

type Props = { children: React.ReactNode };

export const DateLabel = ({ children }: Props) => {
  return (
    <span
      className={clsx(
        'border-b border-dashed border-grey-line p-8 font-mono text-sm text-grey-text sm:border-b-0 sm:max-md:border-r',
        fadeUp,
      )}
    >
      {children}
    </span>
  );
};
