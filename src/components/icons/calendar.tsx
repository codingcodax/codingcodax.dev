import { Svg } from '~/components/ui';

const Calendar = ({ ...props }) => {
  return (
    <Svg
      fill='none'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M8 2v3m8-3v3M4 9h17m0 0v8c0 3-1 5-5 5H8c-3 0-5-2-5-5V9c0-3 2-5 5-5h8c4 0 5 2 5 5Z'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth='1.5'
      />
      <path
        d='M16 14h0m0 3h0m-4-3h0m0 3h0m-4-3h0m0 3h0'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
    </Svg>
  );
};

export default Calendar;
