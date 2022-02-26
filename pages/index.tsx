import type { NextPage } from 'next';

import Hero from '@/components/pages/home/hero';
import FeaturedProjects from '@/components/pages/home/FeaturedProjects';
import generateRssFeed from '@/lib/rss';
// import Newsletter from '@/components/pages/home/Newsletter';

export const getStaticProps = () => {
  generateRssFeed();

  return { props: {} };
};

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <FeaturedProjects />
      {/* <Newsletter /> */}
    </div>
  );
};

export default Home;
