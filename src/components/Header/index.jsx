import React, { useState } from 'react';
import { useRouter } from 'next/router';
import GooglePlay from '@/assets/images/google-play.png';
import Radio from '@/assets/images/radio.png';
import Logo from '@/assets/images/logo.png';
import Image from 'next/image';
import Drawer from './drawer';

const data = {
  navigation: [
    {
      name: "Home",
      slug: "/",
    },
    {
      name: "About Us",
      slug: "/about-us",
    },
    {
      name: "Academics",
      slug: "/academics",
    },
    {
      name: "Notice",
      slug: "/notice",
    },
    {
      name: "Event",
      slug: "/events",
    }
  ],
  appsData : [
    {
      heading: "Download Our Apps",
      thumbnail: GooglePlay,
      url: '#google-play',
    },
    {
      heading: "Visit Our Radio",
      thumbnail: Radio,
      url: '#radio',
    },
  ]
}

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDrawer = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <header className='header'>
      {/* Header Top Bar */}
      <div className="header__top-bar py-4 xl:py-[3px] bg-primary text-white">
        <div className="container">
          <div className="grid xl:grid-cols-[1fr_auto] gap-y-2 gap-x-3 items-center">
            {/* Notification Bar */}
            <div className="header__notification">
              <h2 className="mb-0 uppercase text-md xl:text-2xl text-center xl:text-start">Bangladesh Open University</h2>
            </div>
            {/* DOWNLOAD APPS */}
            <div className="header__apps-bar">
              {data && data?.appsData && (
                <ul className="flex items-center justify-center flex-wrap xl:justify-end gap-x-5">
                  {data?.appsData.map(({ heading, thumbnail: { src, width, height } }, i) => (
                    <li key={i} className='flex items-center gap-2'>
                      {heading && <h6 className="mb-0 uppercase text-sm xl:text-lg">{heading}</h6>}
                      {src && <Image src={src} alt={heading} className='max-h-[40px] xl:max-h-[50px] w-auto' width={width} height={height} />}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Header Navbar */}
      <div className="header__navbar bg-primary-light py-3 xl:py-0">
        <div className="container">
          <div className="flex flex-wrap gap-x-[40px] items-center">
            {/* LOGO */}
            <Link href='/' className="header__logo inline-flex xl:-ms-[100px] 2xl:-ms-[130px] xl:-translate-y-[40px] xl:-mb-[35px]">
              <Image src={Logo} alt={''} className="w-[50px] xl:w-[60px] 2xl:w-[90px] 2xl:h-[90px]" width={Logo.width} height={Logo.height} />
            </Link>

            <button className="xl:hidden ms-auto text-[25px] text-white" type='button' onClick={() => handleToggleDrawer()}>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path></svg>          
            </button>

            {/* Navigation */}
            {data?.navigation && (
              <ul className="header__navigation hidden 2xl:flex items-center gap-x-6 uppercase text-white">
                {data?.navigation.map((item, i) => (
                  <li key={i}>
                    <Link href={item.slug} className={`px-5 py-3 2xl:p-5 inline-block text-md 2xl:text-xl tracking-wide hover:bg-primary-dark transition-all duration-300 ${router.pathname === item.slug ? 'active bg-primary-dark' : ''}`}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <Drawer list={data?.navigation} isOpen={isOpen}/>
      <div className={`header__drawer-overlay ${isOpen ? 'is-open' : ''}`} onClick={() => handleToggleDrawer()}></div>
    </header>
  );
};

export default Header;
