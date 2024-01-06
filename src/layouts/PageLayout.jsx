import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import SchoolBG from '@/assets/images/school-background.jpg';

const PageLayout = ({  title, children }) => {
  return (
    <main className='main-wrapper'>
      <Header />
        <div className="text-center flex items-center flex-col justify-center bg-[top_center] bg-cover bg-no-repeat pt-[300px] pb-[280px] bg-slate-100 relative z-10 before:content-[''] before:w-full before:h-full before:absolute before: before:z-[-1] before:bottom-0 before:start-0 before:bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_20%,rgba(255,255,255,1)_100%)]" 
        style={{ 
            backgroundImage: `url(${SchoolBG.src})`
        }}>
            {title && <h2 className='sec-heading uppercase font-bold'>
            <span className="!text-5xl tracking-wide !text-white before:!bg-red-500">{title} </span>
            </h2>}
        </div>
        <div className='wrapper-inner pt-4 pb-[100px] -mt-[250px] z-20 relative'>
          { children }
        </div>
        <Footer />
    </main>
  )
}

export default PageLayout;