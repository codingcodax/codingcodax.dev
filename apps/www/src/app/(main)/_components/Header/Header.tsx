import { Navbar } from './Navbar';

export const Header = () => {
  return (
    <div className='sticky top-0 z-10 -mt-[25px] bg-white pt-[24px] dark:bg-black'>
      <div className='-ml-[0.9px] w-[calc(100%+2px)] rounded-t-3xl border border-grey-line bg-grey-base'>
        <header className='relative mx-auto flex w-full max-w-screen-lg items-center justify-center py-4'>
          <Navbar />

          <div className='absolute -left-px top-0 h-full w-px bg-grey-line' />
          <div className='absolute -right-px top-0 h-full w-px bg-grey-line' />
        </header>
      </div>

      <div className='absolute -left-px top-0 h-[43px] w-px bg-white dark:bg-black' />
      <div className='absolute -right-px top-0 h-[43px] w-px bg-white dark:bg-black' />
    </div>
  );
};
