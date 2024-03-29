import { Svg } from '~/components/ui';

const TailwindCSS = ({ ...props }) => {
  return (
    <Svg
      fill='none'
      viewBox='0 0 1000 1000'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M489.5 226.5C328 231.6 280 347 269 409.5c14.3-23.2 59.5-74 126-74 77.5 0 136.5 86.5 172.5 113.5a272.6 272.6 0 0 0 247 41c92-28 134.7-125.7 144-172-44.5 60.5-112 96.8-195.5 54-57.5-29.5-100.5-151-273.5-145.5ZM261 501C99.5 506.1 51.5 621.5 40.5 684c14.3-23.2 59.5-74 126-74C244 610 303 696.5 339 723.5a272.6 272.6 0 0 0 247 41c92-28 134.7-125.7 144-172-44.5 60.5-112 96.8-195.5 54C477 617 434 495.5 261 501Z'
        fill='currentColor'
      />
    </Svg>
  );
};

export default TailwindCSS;
