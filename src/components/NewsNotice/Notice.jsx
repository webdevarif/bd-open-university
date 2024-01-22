import React, { useEffect, useState } from 'react'
import ListPost from '../ListPost'
import Link from 'next/link'

const Notice = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://opentv.nvs.la/api/v1/sg-4/vlogdata/NOTICE%20BOARD/");
                const result = await response.json();
                setData(result);
                console.log("NOTICE ", result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

  return (
    <div className="notice">
      <h3 className='sec-heading text-center mb-10'><span>Notice Board</span></h3>
      <div className="mb-10">
        { data && <ListPost list={data} limit={4}/>}
      </div>
      <Link href="/notice" className='btn btn--primary'>View All Notice <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 17 17" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g></g><path d="M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z"></path></svg></Link>
    </div>
  )
}

export default Notice