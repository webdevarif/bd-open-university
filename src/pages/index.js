import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import Schedule from '@/components/Schedule';
import Hero from '@/components/Hero';
import TabHorizontal from '@/components/TabHorizontal';
import NewsNotice from '@/components/NewsNotice';


const Home = () => {
  return (
    <MainLayout>

      {/* HERO VIDEO */}
      <Hero />

      {/* SCHEDULE */}
      <Schedule />

      {/* TABS CONTENT */}
      <TabHorizontal />

      {/* NEWS NOTICE */}
      <NewsNotice />
    </MainLayout>
  )
}

export default Home;
