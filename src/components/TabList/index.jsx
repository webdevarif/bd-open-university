import React, { useState } from 'react';
import Image from 'next/image';

const TabList = ({ list, tabLimit, itemLimit }) => {
    const [video, setVideo] = useState(null);
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const handleVideoPlay = (index) => {
        setVideo(index);
    };

    return (
        list && (
            <div className="grid xl:grid-cols-[300px_1fr] gap-y-6 gap-x-6">
                {/* SIDEBAR */}
                <div className="">
                    <div className="bg-white sticky top-2 h-auto">
                        <ul className="flex flex-col nav--tab">
                            {list.slice(0, tabLimit).map((tab, i) => (
                                <li
                                    key={i}
                                    onClick={() => handleTabClick(i)}
                                    className={`cursor-pointer border-b-2 border-primary-light p-5 uppercase text-md xl:text-xl text-primary relative ${activeTab === i ? 'active' : ''}`}
                                >
                                    {tab.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* CONTENT */}
                <div className="tab--content">
                    {video && 
                            <div 
                            className='w-full mb-4 pb-[56.25%] pt-0 h-0 relative'>
                                <iframe src={`${ video }?autoplay=1&mute=0`}
                                    frameBorder='0'
                                    allow='autoplay; encrypted-media'
                                    allowFullScreen
                                    title='video'
                                    className='absolute h-full w-full top-0 left-0'
                            />
                            </div>
                        }
                    {list.slice(0, tabLimit).map((tab, i) => (
                        <div key={i} className={`tab--panel ${activeTab === i ? 'active' : ''}`}>
                            <ul className="grid grid-cols-2 xl:grid-cols-3 gap-[15px] xl:gap-[30px]">
                                {tab.listvideo && tab.listvideo.slice(0, itemLimit).map((item, j) => (
                                    <li key={j} className='relative cursor-pointer' onClick={(e) => handleVideoPlay(item.embedded_url)}>
                                        <div className="inline-flex absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[40px] h-[40px] cursor-pointer bg-black bg-opacity-50 justify-center items-center text-white rounded-full">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
                                        </div>
                                        <Image src={item.thumbnail_url} width={250} height={200} className='w-full h-full aspect-1 object-cover object-center' alt={item.title}/>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        )
    );
};

export default TabList;
