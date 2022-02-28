import { useMediaQuery } from '~/hooks';
import { inputVariants } from '~/animations/pages';
import { Box, Button, Grid, Heading, MotionBox, Text } from '~/components/ui';
import { Link } from '~/components/atoms';

import Icons from './Icons';

const Hero = () => {
  const isLargeSize = useMediaQuery('(min-width: 1000px)');

  return (
    <Box
      css={{
        width: 'calc(100vw - 2rem)',
        display: 'grid',
        gridColumnGap: '$8',
        gridTemplate: 'auto / 1.5fr 1fr',
        alignItems: 'center',
        '@bp1': { w: '$full' },
      }}
    >
      <MotionBox
        animate='show'
        // @ts-ignore next-line
        as='main'
        css={{
          height: 'calc(100vh - 3.5rem)',
          display: 'grid',
          alignContent: 'center',
        }}
        initial='hidden'
        variants={inputVariants}
      >
        <Heading
          as='h1'
          css={{ mb: '$2', lineHeight: 'initial' }}
          size={{ '@initial': '4xl', '@bp1': '5xl' }}
        >
          Hi, I’m Alexis Guzman.
        </Heading>
        <Heading
          as='h2'
          css={{
            mb: '$16',
            fontFamily: '$body',
          }}
          fontWeight='normal'
          size='2xl'
        >
          Welcome to my corner of the internet, where you can find my works,
          thoughts, favorite coffee and other random things.
        </Heading>

        <Heading
          as='h3'
          css={{ mb: '$2' }}
          size={{ '@initial': '2xl', '@bp1': '3xl' }}
        >
          Ok, but who are you?
        </Heading>
        <Text
          css={{
            mb: '$4',
            fontSize: '$xl',
          }}
        >
          I’m a curiosity-driven, design-focused developer, building rich,
          user-centric, inclusive experiences on the web.
        </Text>
        <Text
          css={{
            mb: '$8',
            fontSize: '$xl',
          }}
        >
          Feel free to have a look around, and learn more about myself and what
          I like to work on.
        </Text>

        <Grid
          css={{ justifyContent: 'start', gridColumnGap: '$4' }}
          direction='column'
        >
          <Link href='/#projects'>
            <Button
              cta
              as='a'
              css={{ textDecoration: 'none' }}
              size='large'
              variant='primary'
            >
              See My Work
            </Button>
          </Link>

          <Link href='/about#contact'>
            <Button
              as='a'
              css={{ textDecoration: 'none' }}
              size='large'
              variant='primary'
            >
              Get In Touch
            </Button>
          </Link>
        </Grid>
      </MotionBox>

      {isLargeSize && <Icons css={{ w: '$104', color: '$highTextColor' }} />}
    </Box>
  );
};

export default Hero;
