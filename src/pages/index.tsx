import type { NextPage } from 'next';

import generateRssFeed from '~/lib/rss';
import {
  HomeHero as Hero,
  FeaturedProjects,
} from '~/components/containers/sections';

export const getStaticProps = () => {
  generateRssFeed();

  return { props: {} };
};

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <FeaturedProjects />
    </div>
  );
};

export default Home;
