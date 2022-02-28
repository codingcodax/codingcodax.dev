import { Svg } from '~/components/ui';

const Html = ({ ...props }) => {
  return (
    <Svg
      fill='none'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#a)' fill='currentColor'>
        <path d='M11.49 24H7.67v-8.38h8.66v3.54A4.85 4.85 0 0 1 11.5 24Zm-2.62-1.21h2.62a3.64 3.64 0 0 0 3.64-3.63v-2.33H8.87v5.96Z' />
        <path d='M19.16 16.63h-3.84V7.8H24v3.97a4.85 4.85 0 0 1-4.84 4.85Zm-2.62-1.22h2.62a3.64 3.64 0 0 0 3.63-3.63V9h-6.25v6.41Z' />
        <path d='M16.34 16.63H7.67V7.8h8.67v8.82Zm-7.5-1.22h6.25V9H8.87l-.03 6.41Z' />
        <path d='M8.68 8.82H0V4.84A4.85 4.85 0 0 1 4.84 0h3.84v8.82ZM1.22 7.61H7.5V1.2H4.84a3.63 3.63 0 0 0-3.63 3.63v2.77ZM24 8.82h-8.68V0h3.84A4.85 4.85 0 0 1 24 4.84v3.98Zm-7.46-1.21h6.25V4.84a3.63 3.63 0 0 0-3.63-3.63h-2.62v6.4Z' />
        <path d='M16.34 8.82H7.67V0h8.67v8.82Zm-7.5-1.21h6.25V1.2H8.87l-.03 6.4ZM8.68 24H4.85A4.85 4.85 0 0 1 0 19.16v-3.54h8.68V24Zm-7.46-7.17v2.33a3.63 3.63 0 0 0 3.63 3.63H7.5v-5.96H1.21Z' />
        <path d='M8.68 16.63H0V7.8h8.68v8.82ZM1.22 15.4H7.5V9H1.21v6.41Z' />
      </g>
      <defs>
        <clipPath id='a'>
          <path d='M0 0h24v24H0z' fill='none' />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Html;
