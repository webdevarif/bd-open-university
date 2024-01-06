import React from 'react';
import FooterLogo from '@/assets/images/footer-logo.png';
import Image from 'next/image';
import Link from 'next/link';


const Footer = () => {
  const data ={

    menus: [
      {
        heading: "About Us",
        list: [
          {
            name: "Overview",
            url: "#overview",
          },
          {
            name: "University Facts & Acts",
            url: "#university",
          },
          {
            name: "Achievements",
            url: "#achievements",
          },
        ]
      },
      {
        heading: "Academic",
        list: [
          {
            name: "Overview",
            url: "#overview",
          },
          {
            name: "University Facts & Acts",
            url: "#university",
          },
          {
            name: "Achievements",
            url: "#achievements",
          },
        ]
      },
      {
        heading: "Admission",
        list: [
          {
            name: "Overview",
            url: "#overview",
          },
          {
            name: "University Facts & Acts",
            url: "#university",
          },
          {
            name: "Achievements",
            url: "#achievements",
          },
        ]
      },
      {
        heading: "Offices",
        list: [
          {
            name: "Overview",
            url: "#overview",
          },
          {
            name: "University Facts & Acts",
            url: "#university",
          },
          {
            name: "Achievements",
            url: "#achievements",
          },
        ]
      },
      {
        heading: "Research",
        list: [
          {
            name: "Overview",
            url: "#overview",
          },
          {
            name: "University Facts & Acts",
            url: "#university",
          },
          {
            name: "Achievements",
            url: "#achievements",
          },
        ]
      },
      {
        heading: "Campus Life",
        list: [
          {
            name: "Overview",
            url: "#overview",
          },
          {
            name: "University Facts & Acts",
            url: "#university",
          },
          {
            name: "Achievements",
            url: "#achievements",
          },
        ]
      },
    ]
  }
  
  return (
    <footer className='footer bg-primary-dark text-white py-[30px]'>
      <div className="container-fluid">
        <div className="grid sm:grid-cols-3 2xl:grid-cols-6 gap-y-8 gap-x-4">
          {data?.menus?.map(({ heading, list }, i) => (
            <div key={i} className="footer-block">
              {heading && <h3 className="text-2xl mb-[20px]">{heading}</h3>}
              {list && (
                <ul className="flex flex-col gap-2">
                  {list?.map(({ name, url }, s) => (
                    <li key={s}>
                      <Link
                        href={url}
                        className='text-white text-opacity-75 hover:text-opacity-100 transition-all duration-300'>
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        {/* Footer Copyright */}
        <div className="text-center pt-10">
          <Link href="#" className='inline-block'>
            <Image src={FooterLogo.src} alt={''} className='max-w-[50px] mx-auto w-auto' width={FooterLogo.width} height={FooterLogo.height} />
          </Link>
          <div className="mt-3">©2023 open.com. All Right Reserved to Open TV.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;