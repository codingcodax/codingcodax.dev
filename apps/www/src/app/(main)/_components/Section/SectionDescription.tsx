import clsx from 'clsx/lite';

import { fadeUp } from '~/config/animations';

type Props = { children: React.ReactNode };

export const SectionDescription = ({ children }: Props) => {
  return (
    <h4
      className={clsx(
        'font-serif text-lg text-grey-text sm:text-xl md:text-2xl',
        fadeUp,
      )}
    >
      {children}
    </h4>
  );
};
