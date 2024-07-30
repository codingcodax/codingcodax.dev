type Props = { children: React.ReactNode };

export const Section = ({ children }: Props) => {
  return (
    <div className='relative grid grid-cols-3 border-b border-grey-line bg-grey-base md:bg-transparent'>
      <div className='col-span-3 flex flex-col gap-1 p-6 sm:p-8 md:col-span-2 lg:col-span-1'>
        {children}
      </div>
    </div>
  );
};
