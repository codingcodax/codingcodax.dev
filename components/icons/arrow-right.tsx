import { Svg } from '../ui';

const ArrowRight = ({ ...props }) => {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      viewBox='0 0 24 24'
      {...props}
    >
      <path d='M5 12h14M12 5l7 7-7 7' />
    </Svg>
  );
};

export default ArrowRight;
