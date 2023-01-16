import { Svg } from '~/components/ui';

const Stitches = ({ ...props }) => {
  return (
    <Svg
      fill='none'
      viewBox='0 0 800 800'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        clipRule='evenodd'
        d='M60 400c0-17 1-34 4-51L524 84c18 7 35 15 52 25L176 340a27 27 0 0 0-12 34 27 27 0 0 0 9 12l216 155-207 120A339 339 0 0 1 60 400Zm392 167 2-1 87-50 1-1 87-50c4-2 7-5 9-8 9-12 6-29-6-38L420 262l204-118a339 339 0 0 1 111 315L284 719c-19-6-36-15-53-24l221-128Zm-11-56L239 366l41-24 199 147-38 22ZM331 313l38-22 198 147-37 22-199-147ZM450 64 84 275A340 340 0 0 1 450 64Zm-89 674a343 343 0 0 0 351-203L361 738ZM400 0a400 400 0 1 0 0 800 400 400 0 0 0 0-800Z'
        fill='currentColor'
        fillRule='evenodd'
      />
    </Svg>
  );
};

export default Stitches;
