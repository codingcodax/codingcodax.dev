import { Svg } from '../ui';

const ArrowRight = ({ ...props }) => {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='m5 15 7-7 7 7'
      />
    </Svg>
  );
};

export default ArrowRight;
