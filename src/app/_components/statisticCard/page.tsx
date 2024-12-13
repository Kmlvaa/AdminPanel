import { Card, Statistic } from 'antd'
import Image from 'next/image'
import React from 'react'

export default function page(props: { title: string; statisticValue: any; statistic: string; totalValue: any; color: string; imageUrl: any; icon: any }) {
    console.log(props.imageUrl)
    return (
        <Card bordered={false} className="w-80 hover:bg-gray-100">
            <div className="flex flex-col gap-5 text-gray-500">
                <div className="flex flex-row justify-between items-center">
                    <div className="leading-8">
                        <Statistic title={props.title} value={props.totalValue} />
                    </div>
                    <div>
                        <Image src={props.imageUrl} alt="image 1" width={50} height={50} />
                    </div>
                </div>
                <div className="flex flex-row items-center">
                    <Statistic
                        value={props.statisticValue}
                        precision={1}
                        valueStyle={{ color: `${props.color}`, width: '75px', fontSize: 14 }}
                        prefix={<props.icon />}
                        suffix="%"
                        className="text-orange-500 text-md"
                    />
                    <p className="font-semibold text-[13px]">{props.statistic}</p>
                </div>
            </div>
        </Card>
    )
}
