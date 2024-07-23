import { clsx } from 'clsx/lite';

import { fadeUp } from '~/config/animations';

type Props = { children: React.ReactNode };

export const BlockTitle = ({ children }: Props) => {
  return (
    <h2 className={clsx('p-8 font-serif text-5xl', fadeUp)}>{children}</h2>
  );
};
