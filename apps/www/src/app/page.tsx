import type { NextPage } from 'next';

import { Hero } from './_components/Hero';

const Home: NextPage = () => {
  return (
    <div className='min-h-screen'>
      <Hero />
    </div>
  );
};

export default Home;
