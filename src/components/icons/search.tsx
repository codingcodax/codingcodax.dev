import { Svg } from '~/components/ui';

const Search = ({ ...props }) => {
  return (
    <Svg
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
    </Svg>
  );
};

export default Search;
