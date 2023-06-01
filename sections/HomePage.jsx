import React from 'react';
import { FirstHero, SecondHero } from '@/components';

const HomePage = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-row">
        <FirstHero />
        <SecondHero />
      </div>
    </div>
  );
};

export default HomePage;
