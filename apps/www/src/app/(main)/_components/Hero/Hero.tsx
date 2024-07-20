type Props = { children: React.ReactNode };

export const Hero = ({ children }: Props) => {
  return (
    <div className='relative flex min-h-[50vh] items-center justify-center'>
      <div className='border border-grey-line px-8 py-4'>
        <h1 className='font-serif text-6xl font-bold'>{children}</h1>
      </div>

      <div className='absolute -bottom-px left-0 h-px w-full bg-grey-line' />
    </div>
  );
};
