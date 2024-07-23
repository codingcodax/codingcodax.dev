import { clsx } from 'clsx/lite';

import { fadeUp } from '~/config/animations';

type Props = { children: React.ReactNode };

export const SectionTitle = ({ children }: Props) => {
  return <h3 className={clsx('font-serif text-5xl', fadeUp)}>{children}</h3>;
};
