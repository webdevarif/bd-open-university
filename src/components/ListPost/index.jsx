import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Moment from 'react-moment';

const ListPost = ({ list, limit }) => {

  // Use slice to limit the number of items
  const limitedList = list.slice(0, limit);
  return (
    limitedList && (
        <ul className='flex flex-col gap-4 gap-y-10'>
            {limitedList.map(((item, i) =>(
                <li className='grid sm:grid-cols-[1fr_120px] items-start gap-4' key={i}>
                    <div className='grid grid-cols-[80px_1fr] xl:grid-cols-[120px_1fr] gap-4'>
                        {/* Date */}
                        <div className='bg-dark text-white border-s-[6px] border-primary-light inline-flex items-center justify-center flex-col py-3 xl:py-6 text-center uppercase'>
                            <div className="text-xl xl:text-[22px] font-bold"><Moment format='D'>{item.Date}</Moment></div>    
                            <div className="text-sm xl:text-md text-semibold"><Moment format='MMM, YY'>{item.Date}</Moment></div>    
                        </div>
                        {/* Heading */}
                        <div className='flex flex-col justify-between'>
                            <h3 className='text-dark transition-all duration-300 font-semibold ellipsis-1'>{item.title}</h3>
                            <div className='text-end pe-7'>
                                <Link href={'#'} className='text-primary-light transition-all duration-300 hover:text-primary font-bold'>Read More...</Link>
                            </div>
                        </div>
                    </div>
                    <div className='h-full'>
                        <Image
                            src={item.image} 
                            width={500}
                            height={500}
                            alt="thumb"
                            className='w-full min-w-[120px] aspect-1 h-full'
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </li>
            )))}
        </ul>
    )
  )
}

export default ListPost;
