import { Svg } from '../ui';

const Close = ({ ...props }) => {
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
      <path d='M18 6 6 18M6 6l12 12' />
    </Svg>
  );
};

export default Close;
