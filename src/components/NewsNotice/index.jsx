import Link from 'next/link';
import React from 'react';
import ListPost from '../ListPost';
import News from './News';
import Notice from './Notice';

const NewsNotice = () => {
  return (
    <div className="news-notice py-[100px]">
      <div className="container-fluid">
        <div className="grid lg:grid-cols-[1fr_2px_1fr] gap-y-4 gap-x-10">
          {/* NEWS */}
          <News />
          {/* BREAK LINE*/}
          <div className="bg-primary-light bg-opacity-50"></div>
          {/* NOTICE */}
          <Notice />
        </div>
      </div>
    </div>
  )
}

export default NewsNotice