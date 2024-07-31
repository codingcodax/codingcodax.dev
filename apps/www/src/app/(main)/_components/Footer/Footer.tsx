import { Link } from '@acme/ui/Link';

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
          <Link
            isExternal
            className='text-sm text-grey-text'
            href='https://github.com/codingcodax'
          >
            GitHub
          </Link>
        </li>

        <li>
          <Link
            isExternal
            className='text-sm text-grey-text'
            href='https://www.linkedin.com/in/codingcodax'
          >
            LinkedIn
          </Link>
        </li>

        <li>
          <Link
            isExternal
            className='text-sm text-grey-text'
            href='https://x.com/codingcodax'
          >
            X
          </Link>
        </li>
      </ul>
    </footer>
  );
};
