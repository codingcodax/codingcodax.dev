type Props = { href: string; children: React.ReactNode };

export const Project = ({ href, children }: Props) => {
  return (
    <a
      className='group relative grid grid-cols-3 border-b border-grey-line'
      href={href}
      rel='noopener noreferrer'
      target='_blank'
    >
      {children}
    </a>
  );
};
