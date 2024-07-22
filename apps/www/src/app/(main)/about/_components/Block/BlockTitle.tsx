type Props = { children: React.ReactNode };

export const BlockTitle = ({ children }: Props) => {
  return <h2 className='p-8 font-serif text-5xl'>{children}</h2>;
};
