type Props = { children: React.ReactNode };

export const SectionTitle = ({ children }: Props) => {
  return <h3 className='font-serif text-5xl'>{children}</h3>;
};
