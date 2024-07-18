type Props = { children: React.ReactNode };

export const SectionDescription = ({ children }: Props) => {
  return <h4 className='font-serif text-2xl text-grey-text'>{children}</h4>;
};
