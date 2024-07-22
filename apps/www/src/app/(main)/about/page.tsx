import type { NextPage } from 'next';

import { Hero } from '~/app/(main)/_components/Hero';
import { Block, BlockContent, BlockTitle } from './_components/Block';

const About: NextPage = () => {
  return (
    <main>
      <Hero>About me</Hero>

      <Block>
        <BlockTitle>Who I am</BlockTitle>
        <BlockContent>
          <div className='relative space-y-4 bg-grey-base p-8 text-grey-text'>
            <p>
              Hey there! I’m{' '}
              <span className='text-grey-text-contrast'>Alexis Guzman</span>, a
              passionate developer and entrepreneur based in Mexico. My journey
              began with a curiosity for technology and a drive to create
              impactful digital experiences.
            </p>

            <p>
              As a co-founder of{' '}
              <a
                className='text-grey-text-contrast'
                href='https://www.khutz.com/'
                rel='noopener noreferrer'
                target='_blank'
              >
                Khutz
              </a>
              , alongside{' '}
              <a
                className='text-grey-text-contrast'
                href='https://github.com/OscarStrada/'
                rel='noopener noreferrer'
                target='_blank'
              >
                Oscar Arturo
              </a>
              , we led our first big project, Docom, which focused on building a
              healthcare CRM. This experience has fueled my passion for creating
              helpful solutions that enhance experiences.
            </p>

            <p>
              I thrive on exploring new technologies and design trends,
              constantly seeking inspiration to push the boundaries of what’s
              possible. Whether it’s diving into the latest frameworks or
              experimenting with innovative design concepts, I believe that
              creativity and technology go hand in hand. I’m always eager to
              learn from others and collaborate on exciting projects that make a
              difference.
            </p>
          </div>
        </BlockContent>
      </Block>
    </main>
  );
};

export default About;
