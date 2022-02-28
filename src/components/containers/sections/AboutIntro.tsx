import { A, Box, Heading, Text } from '~/components/ui';
import { Link } from '~/components/atoms';

const AboutIntro = () => {
  return (
    <Box align='center' as='main' css={{ maxWidth: '$container-sm' }}>
      <Heading as='h1' css={{ mt: '$12', mb: '$20' }}>
        About 👨‍💻
      </Heading>

      <Heading as='h2' size='xl'>
        Background
      </Heading>
      <Text css={{ mb: '$5' }} lineHeight='relaxed'>
        Hey there! I’m{' '}
        <Link href='/'>
          <A type='3d'>Alexis Guzman</A>
        </Link>
        , a self-taught developer exploring what{"'"}s possible on the web,
        based in Mexico.
      </Text>
      <Text css={{ mb: '$20' }} lineHeight='relaxed'>
        I like to spend my time building{' '}
        <Link href='/projects'>
          <A type='3d'>projects</A>
        </Link>{' '}
        that interest me, as well as pushing myself to learn more through open
        source projects and share my knowledge with other developers.
      </Text>

      <Heading as='h2' size='xl'>
        What I’ve been up to
      </Heading>
      <Text css={{ mb: '$20' }} lineHeight='relaxed'>
        I{"'"}ve been recently focused on building React (specifically Next.js)
        applications, using popular tools such as Chakra UI to help me bring my
        designs and Stitches for CSS-in-JS.
      </Text>

      <Heading as='h2' size='xl'>
        Interests
      </Heading>
      <Text css={{ mb: '$5' }} lineHeight='relaxed'>
        I{"'"}m currently interested in building tools that help us make things
        faster and more efficient.
      </Text>
      <Text css={{ mb: '$5' }} lineHeight='relaxed'>
        I{"'"}m also really into Design Systems and Component Driven User
        Interfaces, and I love to explore the tools and techniques that help to
        create more scalable and maintainable UI{"'"}s.
      </Text>
      <Text css={{ mb: '$5' }} lineHeight='relaxed'>
        When I{"'"}m not coding (writing or reading about it) you
        {"'"}ll typically find me engaging with another creative or engaging
        activity such as design, gaming, curating playlists, solving Rubik{"'"}s
        cube or getting lost in series!
      </Text>
      <Text css={{ mb: '$5' }} lineHeight='relaxed'>
        Although I love to keep myself busy with activities, I make sure to set
        aside for going for walks and runs.
      </Text>
      <Text css={{ mb: '$20' }} lineHeight='relaxed'>
        Learn even more about me on{' '}
        <Link href='https://www.polywork.com/codingcodax'>
          <A rel='noopener noreferrer' target='_blank' type='3d'>
            my timeline
          </A>
        </Link>
        , and please don{"'"}t hesitate to{' '}
        <Link href='#contact'>
          <A type='3d'>contact me</A>
        </Link>
        !
      </Text>
    </Box>
  );
};

export default AboutIntro;
