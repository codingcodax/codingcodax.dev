type Props = { children: React.ReactNode };

export const DetailBlockSubtitle = ({ children }: Props) => {
  return <h5 className='font-serif text-xl text-grey-text'>{children}</h5>;
};
