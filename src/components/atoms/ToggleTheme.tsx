import { useTheme } from 'next-themes';

import { MoonIcon, SunIcon } from '~/components/icons';
import { Button } from '~/components/ui';

const ToggleTheme = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () =>
    theme === 'dark' || resolvedTheme === 'dark '
      ? setTheme('light')
      : setTheme('dark');

  return (
    <Button
      css={{
        p: '$0',
        h: '$10',
        w: '$10',
        display: 'grid',
        placeItems: 'center',
      }}
      variant='extra'
      onClick={toggleTheme}
    >
      {theme === 'light' || resolvedTheme === 'light' ? (
        <MoonIcon css={{ h: '$4', color: '$highTextColor' }} />
      ) : (
        <SunIcon css={{ h: '$4', color: '$highTextColor' }} />
      )}
    </Button>
  );
};

export default ToggleTheme;
