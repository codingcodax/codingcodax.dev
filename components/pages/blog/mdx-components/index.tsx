import { ReactNode } from 'react';
import NextImage from 'next/image';

import { Text } from '@/components/ui';

import Heading from './Heading';
import Link from './Link';
import Divider from './Divider';
import OrderedList from './OrderedList';
import UnorderedList from './UnorderedList';
import ListItem from './ListItem';
import Image from './Image';
import Blockquote from './Blockquote';
import Blockcode from './Blockcode';
import Table from './Table';
import Code from './Code';

export const components = {
  h1: (props: any) => <Heading as='h1' props={props} />,
  h2: (props: any) => <Heading as='h2' props={props} />,
  h3: (props: any) => <Heading as='h3' props={props} />,
  h4: (props: any) => <Heading as='h4' props={props} />,
  h5: (props: any) => <Heading as='h5' props={props} />,
  h6: (props: any) => <Heading as='h6' props={props} />,
  p: (props: any) => (
    <Text
      lineHeight='relaxed'
      css={{ mb: '$4', mx: '$auto', maxWidth: '$container-sm' }}
      {...props}
    />
  ),
  a: ({ href = '', ...props }) => <Link href={href} props={props} />,
  hr: () => <Divider />,
  ol: (props: any) => <OrderedList props={props} />,
  ul: (props: any) => <UnorderedList props={props} />,
  li: (props: any) => <ListItem props={props} />,
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
    <Image {...(props as any)}>{children}</Image>
  ),
  blockquote: (props: any) => <Blockquote props={props} />,
  pre: (props: any) => <Blockcode props={props} />,
  code: (props: any) => <Code props={props} />,
  table: (props: any) => <Table props={props} />,
};
