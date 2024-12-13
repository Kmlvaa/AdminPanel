'use client'
import React from "react";
import { FallOutlined, RiseOutlined } from "@ant-design/icons";
import Header from './_components/contentHeader/page'
import Card from './_components/statisticCard/page'
import { PlusOutlined } from '@ant-design/icons';
import CustomBtn from './_components/button/page'

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row items-center justify-between">
        <div>
          <Header header='Dashboard' />
        </div>
        <div>
          <CustomBtn name=' Yeni imtahan yarat' color='bg-blue-500' prefix={<PlusOutlined />} />
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-5">
        <Card title='Total Istifadəçi' totalValue='38,929' statistic='Up from yesterday' statisticValue={2.3} color='orange' imageUrl="/assets/cardImage1.svg" icon={RiseOutlined} />
        <Card title='Total Giriş' totalValue={18282} statistic='Up from yesterday' statisticValue={3.5} color='green' imageUrl='/assets/cardImage2.svg' icon={RiseOutlined} />
        <Card title='Total Satış(imtahan)' totalValue='$82,191' statistic='Down from yesterday' statisticValue={9.8} color='red' imageUrl='/assets/cardImage3.svg' icon={FallOutlined} />
      </div>
    </div>
  );
}
