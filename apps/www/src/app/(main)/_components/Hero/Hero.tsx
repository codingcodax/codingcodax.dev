import { HeroImage } from './HeroImage';

export const Hero = () => {
  return (
    <div className='relative flex min-h-[50vh] flex-col items-center justify-center bg-grey-base px-2 pb-4 pt-8'>
      <HeroImage />

      <div className='mt-6 flex flex-col items-center justify-center text-center'>
        <h1 className='font-serif text-[80px] font-bold'>Hi, I'm Alexis</h1>
        <h2 className='max-w-lg text-lg text-grey-text'>
          Front-end web wizard who enjoys creating a variety of tools and a
          continuous dedication to learning and self-development.
        </h2>
      </div>

      <div className='absolute -bottom-px right-0 h-px w-full bg-grey-line' />
    </div>
  );
};
