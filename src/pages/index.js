import React from 'react';
import ListPost from '@/components/ListPost';
import MainLayout from '@/layouts/MainLayout';
import NewsJson from '@/data/news.json';
import AcademicBG from '@/assets/images/academic-bg.jpg';
import Image from 'next/image';
import TabList from '@/components/TabList';
import TabJson from '@/data/academic.json';
import Schedule from '@/components/Schedule';
import Hero from '@/components/Hero';


const Home = () => {
  return (
    <MainLayout>

      {/* HERO VIDEO */}
      <Hero />

      {/* SCHEDULE */}
      <Schedule />

      {/* TABS CONTENT */}
      <section className="py-[50px] xl:py-[100px] relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 blur-lg -z-[1]">
          <Image src={AcademicBG.src} alt="" fill className='object-cover object-center'/>
        </div>
        <div className="relative z-10">
          <div className="container">
            <TabList list={TabJson} tabLimit={6} itemLimit={9}/>
          </div>
        </div>
      </section>

      {/* NEWS NOTICE */}
      <div className="news-notice py-[100px]">
        <div className="container-fluid">
          <div className="grid lg:grid-cols-[1fr_2px_1fr] gap-y-4 gap-x-10">
            {/* NEWS */}
            <div className="news">
              <h3 className='sec-heading text-center mb-10'><span>News &amp; Events</span></h3>
              <div className="mb-10">
                <ListPost list={NewsJson} limit={4}/>
              </div>
              <a href="#" className='btn btn--primary'>View All News <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 17 17" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g></g><path d="M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z"></path></svg></a>
            </div>
            {/* BREAK LINE*/}
            <div className="bg-primary-light bg-opacity-50"></div>
            {/* NOTICE */}
            <div className="notice">
              <h3 className='sec-heading text-center mb-10'><span>Notice Board</span></h3>
              <div className="mb-10">
                <ListPost list={NewsJson} limit={4}/>
              </div>
              <a href="#" className='btn btn--primary'>View All Notice <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 17 17" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g></g><path d="M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z"></path></svg></a>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Home;
