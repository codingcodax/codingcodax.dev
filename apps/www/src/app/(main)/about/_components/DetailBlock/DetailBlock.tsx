import { clsx } from 'clsx/lite';

import { fadeUp } from '~/config/animations';

type Props = { children: React.ReactNode };

export const DetailBlock = ({ children }: Props) => {
  return <div className={clsx('col-span-2 p-8', fadeUp)}>{children}</div>;
};
