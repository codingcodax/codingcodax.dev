import { Navbar } from './Navbar';

export const Header = () => {
  return (
    <div className='sticky top-0 z-10 -mt-[9px] bg-white pt-[8px] dark:bg-black sm:-mt-[17px] sm:pt-[16px] md:-mt-[25px] md:pt-[24px]'>
      <div className='-ml-[0.9px] w-[calc(100%+2px)] rounded-t-3xl border border-grey-line bg-grey-base'>
        <header className='relative mx-auto flex w-full max-w-screen-lg items-center justify-center py-4'>
          <div className='before:pointer-events-none before:absolute before:-bottom-1/3 before:left-px before:right-px before:top-3.5 before:select-none before:backdrop-blur-md before:[mask-image:linear-gradient(to_bottom,#000_4rem,transparent)] lg:before:top-px lg:before:[mask-image:linear-gradient(to_bottom,#000_4.5rem,transparent)]' />

          <div className='absolute -bottom-px left-0 h-px w-full bg-grey-line' />

          <Navbar />

          <div className='absolute -left-px top-0 h-full w-px bg-grey-line' />
          <div className='absolute -right-px top-0 h-full w-px bg-grey-line' />
        </header>
      </div>

      <div className='absolute -left-px top-0 h-[27px] w-px bg-white dark:bg-black sm:h-[35px] md:h-[43px]' />
      <div className='absolute -right-px top-0 h-[27px] w-px bg-white dark:bg-black sm:h-[35px] md:h-[43px]' />
    </div>
  );
};
