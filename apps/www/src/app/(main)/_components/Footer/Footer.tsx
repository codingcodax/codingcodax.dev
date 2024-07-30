export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='mx-auto flex h-[68px] w-full max-w-screen-lg items-center justify-between px-8'>
      <p className='text-sm text-grey-text'>
        &copy;{currentYear} &mdash; Alexis Guzman
      </p>

      <div />

      <ul className='flex gap-2'>
        <li>
          <a
            className='text-sm text-grey-text decoration-grey-text decoration-dashed decoration-1 underline-offset-2 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-grey-text focus-visible:ring-offset-1'
            href='https://github.com/codingcodax'
            rel='noopener noreferrer'
            target='_blank'
          >
            GitHub
          </a>
        </li>

        <li>
          <a
            className='text-sm text-grey-text decoration-grey-text decoration-dashed decoration-1 underline-offset-2 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-grey-text focus-visible:ring-offset-1'
            href='https://www.linkedin.com/in/codingcodax'
            rel='noopener noreferrer'
            target='_blank'
          >
            LinkedIn
          </a>
        </li>

        <li>
          <a
            className='text-sm text-grey-text decoration-grey-text decoration-dashed decoration-1 underline-offset-2 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-grey-text focus-visible:ring-offset-1'
            href='https://x.com/codingcodax'
            rel='noopener noreferrer'
            target='_blank'
          >
            X
          </a>
        </li>
      </ul>
    </footer>
  );
};
