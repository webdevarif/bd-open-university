import ListPost from '@/components/ListPost'
import PageLayout from '@/layouts/PageLayout'
import React from 'react'
import NewsJson from '@/data/news.json';

const Notice = () => {
  return (
    <PageLayout title="Notice">
        <div className="container">
            <div className="bg-white p-[50px] rounded-md">
                <ListPost  list={NewsJson} limit={10} />
            </div>
        </div>
    </PageLayout>
  )
}

export default Notice