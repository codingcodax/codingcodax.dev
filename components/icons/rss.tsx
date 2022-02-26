import { Svg } from '../ui';

const RSS = ({ ...props }) => {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      viewBox='0 0 24 24'
      {...props}
    >
      <path d='M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16' />
      <circle cx='5' cy='19' r='1' />
    </Svg>
  );
};

export default RSS;
