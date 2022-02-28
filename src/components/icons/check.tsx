import { Svg } from '~/components/ui';

const Check = ({ ...props }) => {
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
      <path d='M22 11v1a10 10 0 1 1-6-9' />
      <path d='M22 4 12 14l-3-3' />
    </Svg>
  );
};

export default Check;
