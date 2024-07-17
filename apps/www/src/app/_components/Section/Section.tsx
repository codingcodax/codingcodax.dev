type Props = { children: React.ReactNode };

export const Section = ({ children }: Props) => {
  return (
    <div className='relative'>
      <div className='flex flex-col gap-1 p-6'>{children}</div>

      <div className='absolute -top-px left-0 h-px w-full bg-grey-line' />
      <div className='absolute -bottom-px left-0 h-px w-full bg-grey-line' />
    </div>
  );
};
