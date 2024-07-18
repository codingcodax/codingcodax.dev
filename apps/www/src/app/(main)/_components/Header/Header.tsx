import { Navbar } from './Navbar';

export const Header = () => {
  return (
    <div className='sticky top-px z-10 mx-auto flex w-full max-w-screen-lg items-center justify-center bg-grey-base py-4'>
      <Navbar />

      {/* borders */}
      <div className='absolute -top-px left-0 h-px w-full bg-grey-line' />
      <div className='absolute -left-px top-0 h-full w-px bg-grey-line' />
      <div className='absolute -right-px top-0 h-full w-px bg-grey-line' />
      <div className='absolute -bottom-px left-0 h-px w-full bg-grey-line' />
    </div>
  );
};
