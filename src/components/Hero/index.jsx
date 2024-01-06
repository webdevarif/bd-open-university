import React, { useEffect } from 'react';
import VideoPlayer from './video-player';

const Hero = () => {
  return (
    <section className='hero py-[50px]'>
      <div className="container">
        <VideoPlayer src="https://network10.livebox.co.in/network10hls/live.m3u8"/>
      </div>
    </section>
  );
};

export default Hero;
