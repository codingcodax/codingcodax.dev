type Props = { children: React.ReactNode };

export const Block = ({ children }: Props) => {
  return (
    <div className='relative grid grid-cols-3 border-b border-grey-line'>
      {children}
    </div>
  );
};
