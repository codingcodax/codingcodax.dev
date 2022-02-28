import { useRef, useState } from 'react';

import { Box, Button } from '~/components/ui';

const Blockcode = ({ props }: { props: any }) => {
  const textRef = useRef({ textContent: '' });
  const copyFunction = () => {
    if (!navigator.clipboard) return;

    setCopy(true);
    navigator.clipboard.writeText(textRef.current.textContent);

    setTimeout(() => {
      setCopy(false);
    }, 500);
  };
  const [copy, setCopy] = useState(false);

  return (
    <Box
      className='pre-container'
      css={{
        position: 'relative',
        my: '$4',
        mx: '$auto',
        maxWidth: 'calc(100vw - 2rem)',
        '@bp1': { width: 'calc(100vw - 4rem)', maxWidth: '$container-sm' },
      }}
    >
      <Button
        css={{
          position: 'absolute',
          right: '1px',
          top: '1px',
          fontSize: ' $sm',
        }}
        variant='extra'
        onClick={() => copyFunction()}
      >
        {!copy ? 'Copy' : 'Copied'}
      </Button>

      <Box
        ref={textRef}
        as='pre'
        css={{
          p: '$4',
          overflowX: 'auto',
          fontSize: '$sm',
          fontFamily: '$mono',
          lineHeight: '$relaxed',
          bg: '$subtleBackground',
          border: '1px solid $subtleBorder',
          borderRadius: '$sm',
          '&::-webkit-scrollbar': { display: 'none' },

          "&[class*='language-']": { color: '$highTextColor' },
          '& .token.comment, & .token.important, & .token.parameter, & .token.interpolation, & .token.punctuation':
            { color: '$lowTextColor' },
          '& .token.keyword, &.token.console, & .token.class-name, & .token.tag, & .token.operator, & .token.selector, & .token.attr-equals':
            {
              color: '$primary',
            },
          '& .token.function, & .token.property, & .token.attr-name': {
            color: '#3e63dd', // blue
          },
          '& .token.string, & .token.attr-value': { color: '#05a2c2' }, // green
          '& .token.number, & .token.unit, & .token.hexcode': {
            color: '#e54d2e', // orange
          },

          '& .token.function': { fontWeight: '$bold' },

          '.line-number::before': {
            display: 'inline-block',
            width: '$4',
            textAlign: 'right',
            mr: '$4',
            ml: '-8px',
            color: '$lowTextColor',
            opacity: '0.5',
            content: 'attr(line)',
          },

          '.highlight-line': {
            pl: '12px',
            ml: '-16px',
            mr: '-16px',
            display: 'block',
            bg: '$uiElement',
            borderLeft: '4px solid $primary',
          },

          '&>code': { p: '$0', border: 'none' },
        }}
        {...props}
      />
    </Box>
  );
};

export default Blockcode;
