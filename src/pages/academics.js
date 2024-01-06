import TabList from '@/components/TabList';
import PageLayout from '@/layouts/PageLayout';
import React from 'react';
import TabJson from '@/data/academic.json';

const Academics = () => {

  return (
    <PageLayout>
        <div className="container">
           <TabList list={TabJson} tabLimit={6} />
        </div>
    </PageLayout>
  )
}

export default Academics