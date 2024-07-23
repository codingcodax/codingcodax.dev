type Props = { children: React.ReactNode };

export const Section = ({ children }: Props) => {
  return (
    <div className='relative grid grid-cols-3 border-b border-grey-line'>
      <div className='flex flex-col gap-1 p-8'>{children}</div>
    </div>
  );
};
