import { clsx } from 'clsx/lite';

import { fadeUp } from '~/config/animations';

type Props = { children: React.ReactNode };

export const DateLabel = ({ children }: Props) => {
  return (
    <span className={clsx('p-8 font-mono text-sm text-grey-text', fadeUp)}>
      {children}
    </span>
  );
};
