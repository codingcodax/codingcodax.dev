type Props = { children: React.ReactNode };

export const Hero = ({ children }: Props) => {
  return (
    <div className='relative flex min-h-[50vh] items-center justify-center border-b border-grey-line bg-grey-base'>
      <div className='border border-grey-line px-8 py-4'>
        <h1 className='font-serif text-6xl font-bold'>{children}</h1>
      </div>
    </div>
  );
};
