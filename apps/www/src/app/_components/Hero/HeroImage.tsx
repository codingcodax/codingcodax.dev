import Image from 'next/image';

export const HeroImage = () => {
  return (
    <div className='relative'>
      <figure>
        <Image
          alt='codingcodax avatar'
          className='rounded-full grayscale'
          height={100}
          src='https://avatars.githubusercontent.com/u/48135533?v=4'
          width={100}
        />
      </figure>

      <div className='bg-grey-border-hover absolute -left-[100%] top-1/2 h-px w-[100px]' />
      <div className='bg-grey-border-hover absolute -right-[100%] top-1/2 h-px w-[100px]' />

      <div className='border-grey-border-hover absolute -left-[4px] -top-[4px] h-[108px] w-[108px] rounded-full border' />
      <div className='border-grey-border absolute -left-[8px] -top-[8px] h-[116px] w-[116px] rounded-full border' />
      <div className='border-grey-line absolute -left-[12px] -top-[12px] h-[124px] w-[124px] rounded-full border' />
    </div>
  );
};
