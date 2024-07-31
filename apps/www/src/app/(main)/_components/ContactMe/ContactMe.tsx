import { clsx } from 'clsx/lite';

import { Link } from '@acme/ui/Link';

import { fadeUp } from '~/config/animations';

type Props = { variant: 'expanded' | 'collapsed' };

export const ContactMe = ({ variant }: Props) => {
  return (
    <section
      className={clsx(
        'relative p-6 sm:p-8',
        fadeUp,
        variant === 'expanded' ? 'h-[40vh]' : '',
      )}
    >
      <div className='gap flex h-full flex-col justify-center border-2 border-dotted border-grey-line bg-grey-base p-4 sm:p-6 md:p-8'>
        <h4 className='font-serif text-xl sm:text-2xl md:text-3xl'>
          Let’s work together
        </h4>
        <p className='text-sm text-grey-text sm:text-base'>
          If you have any questions, opportunities or would just like to say
          hello, then feel free to send me a DM (
          <Link
            isExternal
            className='text-sm text-grey-text-contrast sm:text-base'
            href='https://dm.new/codingcodax'
          >
            X
          </Link>{' '}
          or{' '}
          <Link
            isExternal
            className='text-sm text-grey-text-contrast sm:text-base'
            href='https://www.linkedin.com/in/codingcodax'
          >
            LinkedIn
          </Link>
          ) or if you prefer, you can{' '}
          <Link
            isExternal
            className='text-sm text-grey-text-contrast sm:text-base'
            href='emailto:codingcodax@gmail.com'
          >
            email me
          </Link>
          .
        </p>
      </div>
    </section>
  );
};
