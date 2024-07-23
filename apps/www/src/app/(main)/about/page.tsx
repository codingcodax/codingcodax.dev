import type { NextPage } from 'next';

import { Hero } from '~/app/(main)/_components/Hero';
import { Block, BlockContent, BlockTitle } from './_components/Block';
import { DateLabel } from './_components/DateLabel';
import {
  DetailBlock,
  DetailBlockContent,
  DetailBlockSubtitle,
  DetailBlockTitle,
} from './_components/DetailBlock';

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

      <Block>
        <BlockTitle>Work Experience</BlockTitle>

        <BlockContent>
          <div className='relative grid grid-cols-2'>
            <DateLabel>JUL - NOV 2023</DateLabel>
            <DetailBlock>
              <DetailBlockTitle>Co-Founder</DetailBlockTitle>
              <DetailBlockSubtitle>Docom - Healthcare CRM</DetailBlockSubtitle>

              <DetailBlockContent>
                <p className='text-sm text-grey-text'>
                  Led a talented team in developing a healthcare CRM aimed at
                  enhancing patient management and communication. Although the
                  project didn’t reach completion, it provided invaluable
                  insights into product development and the healthcare
                  landscape.
                </p>
              </DetailBlockContent>
            </DetailBlock>
          </div>

          <div className='w-full border border-dashed border-grey-line' />

          <div className='grid grid-cols-2'>
            <DateLabel>JUN 2023 - NOW</DateLabel>
            <DetailBlock>
              <DetailBlockTitle>Co-Founder</DetailBlockTitle>
              <DetailBlockSubtitle>Khutz - Digital Agency</DetailBlockSubtitle>

              <DetailBlockContent>
                <p className='text-sm text-grey-text'>
                  I collaborate closely with clients to create tailored
                  solutions that not only meet their needs but also elevate
                  their brand presence online. My focus is on blending
                  functionality with creativity to deliver standout digital
                  experiences.
                </p>
              </DetailBlockContent>
            </DetailBlock>
          </div>
        </BlockContent>
      </Block>

      <Block>
        <BlockTitle>Education</BlockTitle>

        <BlockContent>
          <div className='grid grid-cols-2'>
            <DateLabel>DEC 2019 - JAN 2021</DateLabel>
            <DetailBlock>
              <DetailBlockTitle>Full Stack Developer</DetailBlockTitle>
              <DetailBlockSubtitle>Bottega - Bootcamp</DetailBlockSubtitle>

              <DetailBlockContent>
                <p className='text-sm text-grey-text'>
                  I developed a strong foundation in web technologies, including
                  HTML, CSS, JavaScript, Python, and React. I acquired the tools
                  to craft innovative solutions and bring ideas to life.
                </p>
              </DetailBlockContent>
            </DetailBlock>
          </div>
        </BlockContent>
      </Block>
    </main>
  );
};

export default About;
