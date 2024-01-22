import ListPost from '@/components/ListPost'
import PageLayout from '@/layouts/PageLayout'
import React, { useEffect, useState } from 'react'
import NewsJson from '@/data/news.json';

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
    <PageLayout title="Notice">
        <div className="container">
            <div className="bg-white p-[50px] rounded-md">
              { data && <ListPost  list={data} limit={-1} />}
            </div>
        </div>
    </PageLayout>
  )
}

export default Notice