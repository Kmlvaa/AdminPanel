'use client'
import React, { useState } from "react";
import CustomBtn from './_components/button/page'
import { FallOutlined, PlusOutlined, RiseOutlined } from "@ant-design/icons";
import { Card, Statistic } from "antd";
import User from '../assets/pp.png'
import Image from "next/image";
import cardImage1 from '../assets/cardImage1.svg'
import cardImage2 from '../assets/cardImage2.svg'
import cardImage3 from '../assets/cardImage3.svg'
import Header from './_components/contentHeader/page'

export default function Home() {

  return (
    <div className="flex flex-col gap-10">
      <Header header='Dashboard'/>
      <div className="flex flex-row items-center justify-start gap-5">
        <Card bordered={false} className="w-80 hover:bg-gray-100">
          <div className="flex flex-col gap-5 text-gray-500">
            <div className="flex flex-row justify-between items-center">
              <div className="leading-8">
                <Statistic title='Total Istifadəçi' value={'38,929'} />
              </div>
              <div>
                <Image src={cardImage1} alt="image 1" width={50} height={50} />
              </div>
            </div>
            <div className="flex flex-row items-center">
              <Statistic
                value={2.3}
                precision={1}
                valueStyle={{ color: 'orange', width: '75px', fontSize: 14 }}
                prefix={<RiseOutlined />}
                suffix="%"
                className="text-orange-500 text-md"
              />
              <p className="font-semibold text-[13px]">Up from yesterday</p>
            </div>
          </div>
        </Card>
        <Card bordered={false} className="w-80 hover:bg-gray-100">
          <div className="flex flex-col gap-5 text-gray-500">
            <div className="flex flex-row justify-between items-center">
              <div className="leading-8">
                <Statistic title='Total Giriş' value={18282} />
              </div>
              <div>
                <Image src={cardImage2} alt="image 1" width={50} height={50} />
              </div>
            </div>
            <div className="flex flex-row items-center">
              <Statistic
                value={11.28}
                precision={2}
                valueStyle={{ color: 'green', width: '75px', fontSize: 14 }}
                prefix={<RiseOutlined />}
                suffix="%"
                className="text-green-500 text-md"
              />
              <p className="font-semibold text-[13px]">Up from yesterday</p>
            </div>
          </div>
        </Card>
        <Card bordered={false} className="w-80 hover:bg-gray-100">
          <div className="flex flex-col gap-5 text-gray-500">
            <div className="flex flex-row justify-between items-center">
              <div className="leading-8">
                <Statistic title='Total Satış(imtahan)' value={'$82,191'} />
              </div>
              <div>
                <Image src={cardImage3} alt="image 1" width={50} height={50} />
              </div>
            </div>
            <div className="flex flex-row items-center">
              <Statistic
                value={11.28}
                precision={2}
                valueStyle={{ color: 'red', width: '75px', fontSize: 14 }}
                prefix={<FallOutlined />}
                suffix="%"
                className="text-red-500 text-md"
              />
              <p className="font-semibold text-[13px]">Down from yesterday</p>
            </div>
          </div>
        </Card>
      </div>
      <div>
        
      </div>
    </div>
  );
}
