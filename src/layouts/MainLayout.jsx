import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <main className='main-wrapper'>
      <Header />
        <div className='wrapper-inner py-4'>
          { children }
        </div>
        <Footer />
    </main>
  )
}

export default MainLayout;