import { clsx } from 'clsx';

type Props = { variant: 'expanded' | 'collapsed' };

export const ContactMe = ({ variant }: Props) => {
  return (
    <section
      className={clsx('relative p-8', variant === 'expanded' ? 'h-[40vh]' : '')}
    >
      <div className='gap flex h-full flex-col justify-center border-2 border-dotted border-grey-line bg-grey-base p-8'>
        <h4 className='font-serif text-3xl'>Let’s work together</h4>
        <p className='text-grey-text'>
          If you have any questions, opportunities or would just like to say
          hello, then feel free to send me a DM (
          <a
            className='text-grey-text-contrast decoration-grey-text-contrast decoration-dashed underline-offset-2 hover:underline'
            href='https://dm.new/codingcodax'
            rel='noopener noreferrer'
            target='_blank'
          >
            X
          </a>{' '}
          or{' '}
          <a
            className='text-grey-text-contrast decoration-grey-text-contrast decoration-dashed underline-offset-2 hover:underline'
            href='https://www.linkedin.com/in/codingcodax'
            rel='noopener noreferrer'
            target='_blank'
          >
            LinkedIn
          </a>
          ) or if you prefer, you can{' '}
          <a
            className='text-grey-text-contrast decoration-grey-text-contrast decoration-dashed underline-offset-2 hover:underline'
            href='emailto:codingcodax@gmail.com'
          >
            email me
          </a>
          .
        </p>
      </div>
    </section>
  );
};
