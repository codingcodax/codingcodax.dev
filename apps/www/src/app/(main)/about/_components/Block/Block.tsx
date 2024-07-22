type Props = { children: React.ReactNode };

export const Block = ({ children }: Props) => {
  return (
    <div className='relative grid grid-cols-3'>
      {children}

      <div className='absolute -bottom-px left-0 h-px w-full bg-grey-line' />
    </div>
  );
};
