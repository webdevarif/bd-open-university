import React, { useEffect } from 'react';
import VideoPlayer from './video-player';

const Hero = () => {
  return (
    <section className='hero py-[50px]'>
      <div className="container">
        <VideoPlayer src="https://livess.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/boulive.stream/playlist.m3u8"/>
      </div>
    </section>
  );
};

export default Hero;
