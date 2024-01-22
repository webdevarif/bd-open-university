import React, { useEffect } from 'react';
import VideoPlayer from './video-player';

const Hero = () => {
  return (
    <section className='hero py-[50px]'>
      <div className="container">
        <VideoPlayer src="https://tempe.jagobd.com:1933/iptvsss/boulive.stream/playlist.m3u8"/>
      </div>
    </section>
  );
};

export default Hero;
