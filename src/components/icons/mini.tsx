import { Svg } from '~/components/ui';

const MiniIcon = ({ ...props }) => {
  return (
    <Svg
      fill='none'
      viewBox='0 0 100 100'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g
        clipPath='url(#a)'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth='3'
      >
        <circle cx='32.5' cy='67.5' fillOpacity='.5' r='31' />
        <circle cx='67.5' cy='32.5' r='31' />
      </g>
      <defs>
        <clipPath id='a'>
          <path d='M0 0h100v100H0z' fill='currentColor' />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default MiniIcon;
