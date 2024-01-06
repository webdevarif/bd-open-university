import Image from 'next/image'
import React from 'react'

const Schedule = () => {
    const data = {
        head: [
            {
                name: "Day"
            },
            {
                name: "10 am - 12 pm"
            },
            {
                name: "12 am - 02 pm"
            },
            {
                name: "02 pm - 04 pm"
            },
            {
                name: "04 pm - 06 pm"
            }
        ],
        tbody: [
            {
                heading: "Satarday",
                list: [
                    {
                        title : "Class 1",
                        thumbnail : "https://via.placeholder.com/150x100",
                    },
                    {
                        title : "Class 2",
                        thumbnail : "https://via.placeholder.com/150x100",
                    },
                    {
                        title : "Class 3",
                        thumbnail : "https://via.placeholder.com/150x100",
                    },
                    {
                        title : "Class 4",
                        thumbnail : "https://via.placeholder.com/150x100",
                    }
                ]   
            },
            {
                heading: "Sunday",
                list: [
                    {
                        title : "Class 1",
                        thumbnail : "https://via.placeholder.com/150x100",
                    },
                    {
                        title : "Class 2",
                        thumbnail : "https://via.placeholder.com/150x100",
                    },
                    {
                        title : "Class 3",
                        thumbnail : "https://via.placeholder.com/150x100",
                    },
                    {
                        title : "Class 4",
                        thumbnail : "https://via.placeholder.com/150x100",
                    }
                ]   
            },
            {
                heading: "Monday",
                list: [
                    {
                        title : "Class 1",
                        thumbnail : "https://via.placeholder.com/150x100",
                    },
                    {
                        title : "Class 2",
                        thumbnail : "https://via.placeholder.com/150x100",
                    },
                    {
                        title : "Class 3",
                        thumbnail : "https://via.placeholder.com/150x100",
                    },
                    {
                        title : "Class 4",
                        thumbnail : "https://via.placeholder.com/150x100",
                    }
                ]   
            },
            {
                heading: "Tuesday",
                list: [
                    {
                        title : "Class 1",
                        thumbnail : "https://via.placeholder.com/150x100",
                    },
                    {
                        title : "Class 2",
                        thumbnail : "https://via.placeholder.com/150x100",
                    },
                    {
                        title : "Class 3",
                        thumbnail : "https://via.placeholder.com/150x100",
                    },
                    {
                        title : "Class 4",
                        thumbnail : "https://via.placeholder.com/150x100",
                    }
                ]   
            },
            {
                heading: "Wednesday",
                list: [
                    {
                        title : "Class 1",
                        thumbnail : "https://via.placeholder.com/150x100",
                    },
                    {
                        title : "Class 2",
                        thumbnail : "https://via.placeholder.com/150x100",
                    },
                    {
                        title : "Class 3",
                        thumbnail : "https://via.placeholder.com/150x100",
                    },
                    {
                        title : "Class 4",
                        thumbnail : "https://via.placeholder.com/150x100",
                    }
                ]   
            },
            {
                heading: "Thursday",
                list: [
                    {
                        title : "Class 1",
                        thumbnail : "https://via.placeholder.com/150x100",
                    },
                    {
                        title : "Class 2",
                        thumbnail : "https://via.placeholder.com/150x100",
                    },
                    {
                        title : "Class 3",
                        thumbnail : "https://via.placeholder.com/150x100",
                    },
                    {
                        title : "Class 4",
                        thumbnail : "https://via.placeholder.com/150x100",
                    }
                ]   
            },
            {
                heading: "Friday",
                list: [
                    {
                        title : "Class 1",
                        thumbnail : "https://via.placeholder.com/150x100",
                    },
                    {
                        title : "Class 2",
                        thumbnail : "https://via.placeholder.com/150x100",
                    },
                    {
                        title : "Class 3",
                        thumbnail : "https://via.placeholder.com/150x100",
                    },
                    {
                        title : "Class 4",
                        thumbnail : "https://via.placeholder.com/150x100",
                    }
                ]   
            }
        ]
    }
  return (
    <div className='py-[100px] shadow-xl overflow-auto'>
        <table className="w-full table-fixed min-w-[60rem]">
            {data?.head && (
            <thead>
                <tr>
                {data?.head?.map((header, i) => (
                    <th key={i} className='px-3 text-center'>
                    <span className={`inline-flex px-3 w-full max-w-[200px] justify-center bg-primary-light text-white relative -mb-[2px] py-4 rounded-tl-xl rounded-tr-xl text-[16px] xl:text-[20px] font-normal uppercase`}>
                        {header.name}
                    </span>
                    </th>
                ))}
                </tr>
            </thead>
            )}
            <tbody>
                {data?.tbody?.map((tr, t) => (
                    <tr key={t}>
                        <td className='bg-primary border-b-2 border-white text-white py-4 px-3 xl:px-[50px] 2xl:px-[100px] text-[14px] xl:text-xl uppercase font-semibold'>{tr.heading}</td>
                        {tr?.list?.map((td, t) =>(
                        <td className='bg-primary text-white text-center py-4 border-b-2 border-r-2 border-r-primary-light px-3 border-white'>
                            <div className="inline-flex gap-x-4 items-center">
                                <span>{ td.title }</span>
                                <Image src={td.thumbnail} className='w-[80px] h-[50px] object-cover' width={150} height={100} alt={td.title}/>
                            </div>
                        </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Schedule