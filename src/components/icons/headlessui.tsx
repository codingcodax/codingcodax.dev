import { Svg } from '~/components/ui';

const HeadlessUI = ({ ...props }) => {
  return (
    <Svg
      preserveAspectRatio='xMidYMid'
      viewBox='0 0 256 256'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <defs>
        <linearGradient id='a' x1='35.9%' x2='60.3%' y1='7.2%' y2='116%'>
          <stop offset='0%' stopColor='currentColor' />
          <stop offset='100%' stopColor='currentColor' />
        </linearGradient>
        <linearGradient id='b' x1='39.2%' x2='55.1%' y1='0%' y2='99.2%'>
          <stop offset='0%' stopColor='currentColor' />
          <stop offset='100%' stopColor='currentColor' />
        </linearGradient>
      </defs>
      <path
        d='m50.7 159 156.2-52a498.2 498.2 0 0 0-7.9-42.6c-2.8-10.7-5-13.6-5.8-14.5a30 30 0 0 0-11-8c-1.2-.5-4.6-1.7-15.7-1-11.6.6-27 3-51.2 6.9A607.6 607.6 0 0 0 64.4 57c-10.7 2.8-13.6 5-14.5 5.8a30 30 0 0 0-8 11c-.5 1.2-1.7 4.6-1 15.7.6 11.6 3 27 6.9 51.2l2.9 18.4Z'
        fill='url(#a)'
      />
      <path
        d='M7.6 147c-7.4-46.9-11.1-70.3-3-89.2A71 71 0 0 1 23 32.2c15.4-13.4 39-17.1 85.8-24.6 47-7.4 70.4-11.1 89.3-3A71 71 0 0 1 223.8 23c13.4 15.4 17.1 39 24.6 85.8 7.4 47 11.1 70.4 3 89.3a71 71 0 0 1-18.5 25.6c-15.4 13.4-39 17.1-85.8 24.6-47 7.4-70.4 11.1-89.2 3A71 71 0 0 1 32.3 233C18.8 217.5 15 193.9 7.6 147Zm82.8 83.4c12.6-.8 28.7-3.3 52.7-7.1 24-3.8 40.1-6.4 52.3-9.5a48.9 48.9 0 0 0 20.8-9.2 45.7 45.7 0 0 0 12-16.4c1.8-4.3 3-10.4 2.2-22.6a617 617 0 0 0-7.1-52.7c-3.8-24-6.4-40.1-9.5-52.3a48.9 48.9 0 0 0-9.2-20.8 45.7 45.7 0 0 0-16.4-12c-4.3-1.8-10.4-3-22.6-2.2-12.6.8-28.7 3.3-52.7 7.1-24 3.8-40.1 6.4-52.3 9.5a48.9 48.9 0 0 0-20.8 9.2 45.7 45.7 0 0 0-12 16.4c-1.8 4.3-3 10.4-2.2 22.6.8 12.6 3.3 28.7 7.1 52.7 3.8 24 6.4 40.1 9.5 52.3a48.9 48.9 0 0 0 9.2 20.8 45.7 45.7 0 0 0 16.4 12c4.3 1.8 10.4 3 22.6 2.2Z'
        fill='url(#b)'
      />
    </Svg>
  );
};

export default HeadlessUI;
