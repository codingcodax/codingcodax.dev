import { Svg } from '~/components/ui';

const RSS = ({ ...props }) => {
  return (
    <Svg
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16' />
      <circle cx='5' cy='19' r='1' />
    </Svg>
  );
};

export default RSS;
