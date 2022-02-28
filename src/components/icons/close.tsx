import { Svg } from '~/components/ui';

const Close = ({ ...props }) => {
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
      <path d='M18 6 6 18M6 6l12 12' />
    </Svg>
  );
};

export default Close;
