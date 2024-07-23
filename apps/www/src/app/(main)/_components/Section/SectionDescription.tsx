import clsx from 'clsx/lite';

import { fadeUp } from '~/config/animations';

type Props = { children: React.ReactNode };

export const SectionDescription = ({ children }: Props) => {
  return (
    <h4 className={clsx('font-serif text-2xl text-grey-text', fadeUp)}>
      {children}
    </h4>
  );
};
