import { Svg } from '~/components/ui';

const RadixUI = ({ ...props }) => {
  return (
    <Svg
      fill='none'
      viewBox='4 0 17 25'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M12 25a8 8 0 1 1 0-16v16zm0-25H4v8h8V0zm5 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z'
        fill='currentcolor'
      />
    </Svg>
  );
};

export default RadixUI;
