import { Svg } from '~/components/ui';

const Slug = ({ ...props }) => {
  return (
    <Svg
      fill='none'
      viewBox='0 0 100 100'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#a)'>
        <path
          clipRule='evenodd'
          d='M0 17C0 7 7 0 17 0h66c10 0 17 7 17 17v66c0 10-7 17-17 17H17C7 100 0 93 0 83V17Zm52 5a18 18 0 0 1 26 26l-9 9a18 18 0 0 1-28-2 3 3 0 1 1 5-4 12 12 0 0 0 19 2l9-10a12 12 0 0 0-18-17l-5 5a3 3 0 0 1-4-4l5-5Zm-7 16a18 18 0 0 0-14 5l-9 9a18 18 0 0 0 26 26l5-5a3 3 0 1 0-4-4l-5 5a12 12 0 0 1-18-17l9-10a12 12 0 0 1 19 2 3 3 0 0 0 5-4 18 18 0 0 0-14-7Z'
          fill='currentColor'
          fillRule='evenodd'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path d='M0 0h100v100H0z' fill='currentColor' />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Slug;
