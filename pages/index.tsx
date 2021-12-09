import type { NextPage } from 'next';

import Hero from '@/components/pages/home/hero';
import FeaturedProjects from '@/components/pages/home/FeaturedProjects';
import Newsletter from '@/components/pages/home/Newsletter';

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <FeaturedProjects />
      <Newsletter />
    </div>
  );
};

export default Home;
