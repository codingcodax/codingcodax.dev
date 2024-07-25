type Props = { children: React.ReactNode };

export const Block = ({ children }: Props) => {
  return (
    <div className='relative grid grid-cols-1 border-b border-grey-line md:grid-cols-3'>
      {children}
    </div>
  );
};
