import { Navbar } from './Navbar';

export const Header = () => {
  return (
    <div className='bg-grey-base sticky top-px z-10 mx-auto flex w-full max-w-screen-lg items-center justify-center py-4'>
      <Navbar />

      {/* borders */}
      <div className='bg-grey-line absolute -top-px left-0 h-px w-full' />
      <div className='bg-grey-line absolute -left-px top-0 h-full w-px' />
      <div className='bg-grey-line absolute -right-px top-0 h-full w-px' />
      <div className='bg-grey-line absolute -bottom-px left-0 h-px w-full' />
    </div>
  );
};
