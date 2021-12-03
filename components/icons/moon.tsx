import { Svg } from '../ui';

const Moon = ({ ...props }) => {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      viewBox='0 0 24 24'
      {...props}
    >
      <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' />
    </Svg>
  );
};

export default Moon;
