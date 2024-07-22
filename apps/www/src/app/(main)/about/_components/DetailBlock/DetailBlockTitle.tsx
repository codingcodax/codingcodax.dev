type Props = { children: React.ReactNode };

export const DetailBlockTitle = ({ children }: Props) => {
  return <h4 className='font-serif text-3xl'>{children}</h4>;
};
