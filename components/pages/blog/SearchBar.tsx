import { ChangeEventHandler, FC } from 'react';

import { SearchIcon } from '@/components/icons';
import { Grid, Input } from '@/components/ui';

interface SearchBarProps {
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

const SearchBar: FC<SearchBarProps> = ({ value, handleChange }) => {
  return (
    <Grid direction='column' css={{ mt: '$4', position: 'relative' }}>
      <Input
        value={value}
        onChange={handleChange}
        placeholder='Search articles...'
      />
      <SearchIcon
        css={{
          p: '$3',
          h: '$full',
          position: 'absolute',
          top: '0',
          right: '0',
        }}
      />
    </Grid>
  );
};

export default SearchBar;
