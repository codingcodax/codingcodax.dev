import NextImage from 'next/image';
import {
  Heading,
  Text,
  A,
  Grid,
  OrderedList,
  UnorderedList,
  ListItem,
  Box,
} from '@/components/ui';
import Link from '@/components/common/Link';
import { ArrowRightIcon } from '../icons';
import { ReactNode } from 'react';

export const components = {
  h1: (props: any) => (
    <Heading
      as='h1'
      css={{
        mt: '$8',
        mb: '$4',
        mx: '$auto',
        maxWidth: '$container-sm',
        '& code': { fontSize: '$4xl' },
      }}
      {...props}
    />
  ),
  h2: (props: any) => (
    <Heading
      as='h2'
      css={{
        my: '$4',
        mx: '$auto',
        maxWidth: '$container-sm',
        '& code': { fontSize: '$3xl' },
      }}
      {...props}
    />
  ),
  h3: (props: any) => (
    <Heading
      as='h3'
      css={{
        my: '$4',
        mx: '$auto',
        maxWidth: '$container-sm',
        '& code': { fontSize: '$2xl' },
      }}
      {...props}
    />
  ),
  h4: (props: any) => (
    <Heading
      as='h4'
      css={{
        my: '$2',
        mx: '$auto',
        maxWidth: '$container-sm',
        '& code': { fontSize: '$xl' },
      }}
      {...props}
    />
  ),
  h5: (props: any) => (
    <Heading
      as='h5'
      css={{
        my: '$2',
        mx: '$auto',
        maxWidth: '$container-sm',
        '& code': { fontSize: '$lg' },
      }}
      {...props}
    />
  ),
  h6: (props: any) => (
    <Heading
      as='h6'
      css={{
        my: '$1',
        mx: '$auto',
        maxWidth: '$container-sm',
        '& code': { fontSize: '$lg' },
      }}
      {...props}
    />
  ),
  p: (props: any) => (
    <Text
      lineHeight='relaxed'
      css={{ mb: '$4', mx: '$auto', maxWidth: '$container-sm' }}
      {...props}
    />
  ),
  a: ({ href = '', ...props }) => (
    <Link href={href}>
      {href.startsWith('http') ? (
        <A
          css={{
            color: '$primary',
            fontWeight: '$bold',
            '&:hover': { color: '$primaryDark' },
          }}
          {...props}
          target='_blank'
          rel='noopener noreferrer'
        />
      ) : (
        <A
          css={{
            color: '$primary',
            fontWeight: '$bold',
            '&:hover': { color: '$primaryDark' },
          }}
          {...props}
        />
      )}
    </Link>
  ),
  hr: () => (
    <Grid
      direction='column'
      css={{
        my: '$8',
        mx: '$auto',
        w: '$full',
        maxWidth: '$container-sm',
        justifyContent: 'center',
        gridColumnGap: '$4',
      }}
    >
      <Grid
        css={{ w: '$8', h: '$1', borderRadius: '$sm', bg: '$subtleBorder' }}
      />
      <Grid
        css={{ w: '$8', h: '$1', borderRadius: '$sm', bg: '$subtleBorder' }}
      />
      <Grid
        css={{ w: '$8', h: '$1', borderRadius: '$sm', bg: '$subtleBorder' }}
      />
    </Grid>
  ),
  ol: (props: any) => (
    <OrderedList
      as='ol'
      css={{
        pl: '$8',
        mx: '$auto',
        maxWidth: '$container-sm',
        display: 'grid',
        gridRowGap: '$2',
        '--counter-name': 'counts',
        counterReset: 'var(--counter-name)',
        '& svg': {
          display: 'none',
        },
      }}
      {...props}
    />
  ),
  ul: (props: any) => (
    <UnorderedList
      as='ul'
      css={{
        mx: '$auto',
        maxWidth: '$container-sm',
        display: 'grid',
        gridRowGap: '$2',
        listStyleType: 'disc',
      }}
      {...props}
    />
  ),
  li: (props: any) => (
    <ListItem
      css={{
        display: 'flex',
        alignItems: 'flex-start',
        counterIncrement: 'var(--counter-name)',
        '&::before': {
          mr: '$3',
          content: "counters(var(--counter-name),'.') '. '",
          color: '$primary',
          fontWeight: '$bold',
        },
      }}
    >
      <ArrowRightIcon css={{ mr: '$3', h: '$5', color: '$primary' }} />
      <div {...props} />
    </ListItem>
  ),
  strong: (props: any) => (
    <Text as='strong' css={{ fontWeight: '$bold' }} {...props} />
  ),
  em: (props: any) => <Text as='em' css={{ fontStyle: 'italic' }} {...props} />,
  del: (props: any) => (
    <Text
      as='del'
      css={{
        textDecorationColor: '#aa2429',
        textDecorationThickness: '0.15rem',
      }}
      {...props}
    />
  ),
  img: (props: any) => <NextImage {...(props as any)} />,
  Img: ({ children, ...props }: { children: ReactNode }) => (
    <Box as='figure' css={{ my: '$8' }}>
      <Box css={{ borderRadius: '$sm', overflow: 'hidden' }}>
        <NextImage {...(props as any)} />
      </Box>
      {children && (
        <Text
          as='figcaption'
          css={{
            mt: '$2',
            fontStyle: 'italic',
            textAlign: 'center',

            '&>p': {
              color: '$lowTextColor',
              fontSize: '$sm',
            },

            '&>p>code': { py: '2px' },
          }}
        >
          {children}
        </Text>
      )}
    </Box>
  ),
  blockquote: (props: any) => (
    <Box
      as='blockquote'
      css={{
        my: '$8',
        mx: '$auto',
        py: '$4',
        px: '$8',
        maxWidth: '$container-sm',
        bg: '$subtleBackground',
        borderLeft: '3px solid $primary',
        borderTopRightRadius: '$sm',
        borderBottomRightRadius: '$sm',

        '& p': {
          mb: '$0',
        },
      }}
      {...props}
    />
  ),
  pre: (props: any) => (
    <Box
      as='pre'
      css={{
        p: '$1',
        mx: '$auto',
        maxWidth: '$container-sm',
        fontSize: '$sm',
        fontFamily: 'mono',
        bg: '$subtleBackground',
        '&>code': { border: 'none' },
      }}
      {...props}
    />
  ),
  code: (props: any) => (
    <Box
      as='code'
      css={{
        py: '$1',
        px: '$2',
        fontFamily: 'mono',
        fontSize: '$sm',
        bg: '$subtleBackground',
        border: '1px solid $subtleBorder',
        borderRadius: '$sm',
      }}
      {...props}
    />
  ),
  table: (props: any) => (
    <Box
      as='table'
      css={{
        my: '$8',
        mx: '$auto',
        width: '$full',
        maxWidth: '$container-sm',

        '& th': { fontWeight: '$bold' },

        '& th, & td': {
          padding: '$2 0 $2 $4',
          textAlign: 'left',
          border: '1px solid $subtleBorder',
          borderCollapse: 'collapse',
        },
      }}
      {...props}
    />
  ),
};
