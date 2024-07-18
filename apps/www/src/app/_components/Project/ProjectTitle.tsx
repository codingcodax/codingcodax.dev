type Props = { children: React.ReactNode };

export const ProjectTitle = ({ children }: Props) => {
  return <h4 className='font-serif text-xl'>{children}</h4>;
};
