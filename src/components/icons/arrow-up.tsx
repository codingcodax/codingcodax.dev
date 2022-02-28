import { Svg } from '~/components/ui';

const ArrowRight = ({ ...props }) => {
  return (
    <Svg
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='m5 15 7-7 7 7'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
    </Svg>
  );
};

export default ArrowRight;
