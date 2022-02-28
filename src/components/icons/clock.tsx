import { Svg } from '~/components/ui';

const Clock = ({ ...props }) => {
  return (
    <Svg
      fill='none'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10Z'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
      <path
        d='m15.71 15.18-3.1-1.85c-.54-.32-.98-1.09-.98-1.72v-4.1'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
    </Svg>
  );
};

export default Clock;
