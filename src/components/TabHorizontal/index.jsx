import React, { useState, useEffect } from 'react';
import AcademicBG from '@/assets/images/academic-bg.jpg';
import Image from 'next/image';
import TabList from '@/components/TabList';
// import TabJson from '@/data/academic.json';

const TabHorizontal = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://opentv.nvs.la/api/v1/sg-4/ytlist");
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

  return (
    <section className="py-[50px] xl:py-[100px] relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 blur-lg -z-[1]">
        <Image src={AcademicBG.src} alt="" fill className='object-cover object-center'/>
        </div>
        <div className="relative z-10">
        <div className="container">
            { data && <TabList list={data} tabLimit={6} itemLimit={9}/>}
        </div>
        </div>
    </section>
  )
}

export default TabHorizontal