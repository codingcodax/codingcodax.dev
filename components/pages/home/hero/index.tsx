import { Box, Heading, Text } from '@/components/ui';

import useMediaQuery from '@/hooks/useMediaQuery';

import GetInTouch from './GetInTouch';
import Icons from './Icons';

const Hero = () => {
  const isLargeSize = useMediaQuery('(min-width: 1000px)');

  return (
    <Box
      css={{
        display: 'grid',
        gridColumnGap: '$8',
        gridTemplate: 'auto / auto 1fr',
        alignItems: 'center',
      }}
    >
      <Box
        css={{
          height: 'calc(100vh - 3.5rem)',
          display: 'grid',
          alignContent: 'center',
        }}
      >
        <Heading
          as='h1'
          size={{ '@initial': '4xl', '@bp1': '5xl' }}
          css={{ mb: '$2' }}
        >
          Hi, I’m Alexis Guzman.
        </Heading>
        <Heading
          as='h2'
          size='2xl'
          fontWeight='normal'
          css={{
            mb: '$16',
            lineHeight: '$3xl',
            fontFamily: '$body',
          }}
        >
          Welcome to my corner of the internet, where you can find my works,
          thoughts, favorite coffee and other random things.
        </Heading>

        <Heading
          as='h3'
          size={{ '@initial': '2xl', '@bp1': '3xl' }}
          css={{ mb: '$2' }}
        >
          Ok, but who are you?
        </Heading>
        <Text
          css={{
            mb: '$8',
            color: '$grayTextColor',
            fontSize: '$xl',
            lineHeight: '$xl',
          }}
        >
          I’m a curiosity-driven, design-focused developer, building rich,
          user-centric, inclusive experiences on the web.
        </Text>
        <Text
          css={{
            mb: '$4',
            color: '$grayTextColor',
            fontSize: '$xl',
            lineHeight: '$xl',
          }}
        >
          Feel free to have a look around, and learn more about myself and what
          I like to work on.
        </Text>

        <GetInTouch />
      </Box>

      {isLargeSize && <Icons css={{ w: '$md', color: '$headingColor' }} />}
    </Box>
  );
};

export default Hero;
