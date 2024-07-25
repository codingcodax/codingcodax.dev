type Props = { href: string; children: React.ReactNode };

export const Project = ({ href, children }: Props) => {
  return (
    <a
      className='group relative grid grid-cols-1 border-b border-grey-line md:grid-cols-3'
      href={href}
      rel='noopener noreferrer'
      target='_blank'
    >
      {children}
    </a>
  );
};
