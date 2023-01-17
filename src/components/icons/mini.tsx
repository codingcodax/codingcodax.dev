import { Svg } from '~/components/ui';

const AlanAi = ({ ...props }) => {
  return (
    <Svg
      fill='none'
      viewBox='0 0 100 100'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g
        clipPath='url(#a)'
        clipRule='evenodd'
        fill='currentColor'
        fillRule='evenodd'
      >
        <path d='M100 0H50v100h50V0ZM50 90h11v-8H50v8Zm0-72h11v-8H50v8Zm19-4v-4h11c6 0 10 4 10 10v11h-8V20l-2-2H69v-4Zm17 25h4v22h-8V39h4Zm0 30h4v11c0 6-4 10-10 10H69v-8h11l2-2V69h4Z' />
        <path
          d='M15 0C7 0 0 7 0 15v70c0 8 7 15 15 15h35V90H39v-8h11V18H39v-8h11V0H15Zm-5 80V69h8v11l2 2h11v8H20c-6 0-10-4-10-10Zm4-19h-4V39h8v22h-4Zm0-30h-4V20c0-6 4-10 10-10h11v8H20l-2 2v11h-4Z'
          fillOpacity='.5'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <rect fill='currentColor' height='100' rx='15' width='100' />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default AlanAi;
