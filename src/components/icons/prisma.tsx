import { Svg } from '~/components/ui';

const Prisma = ({ ...props }) => {
  return (
    <Svg
      fill='none'
      viewBox='0 0 100 100'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#a)'>
        <path
          d='M90.862 76.187 56.47 3.152A5.517 5.517 0 0 0 51.767.01c-2.092-.122-3.967.887-5.025 2.605L9.442 63.03a5.65 5.65 0 0 0 .066 6.064L27.74 97.338c1.087 1.686 2.97 2.662 4.927 2.662.555 0 1.112-.078 1.66-.24l52.925-15.654a5.799 5.799 0 0 0 3.64-3.147 5.666 5.666 0 0 0-.03-4.772Zm-7.7 3.133L38.255 92.6c-1.372.407-2.687-.78-2.398-2.163L51.9 13.609c.3-1.437 2.285-1.665 2.912-.334L84.515 76.35c.56 1.19-.079 2.593-1.354 2.97Z'
          fill='currentColor'
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

export default Prisma;
