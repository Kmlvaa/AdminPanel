import { CloseCircleOutlined } from '@ant-design/icons'
import { Button, Card } from 'antd'
import Image from 'next/image'
import React from 'react'

export default function index(props: any) {
    return (
        <Card className='w-auto h-full rounded-lg p-3'>
            <Image src={props.image} alt='image card' width={250} height={250} className='cover'/>
            <div className='flex flex-col gap-10'>
                <div className='flex flex-row items-center justify-between'>
                    <div>
                        <h3 className='font-semibold'>{props.title}</h3>
                        <p>{props.date}</p>
                    </div>
                    <div>
                        <CloseCircleOutlined className='text-red-500 border-[1px] border-solid p-2 rounded-full bg-gray-200 border-gray-200 cursor-pointer' />
                    </div>
                </div>
                <div className='flex flex-row items-center justify-between'>
                    <div>
                        <Button className='py-1 px-3 bg-gray-100 text-[#656565] font-semibold'>Düzəliş et</Button>
                    </div>
                    <div>
                        <p className='text-blue-600 font-semibold text-lg'>${props.amount}</p>
                    </div>
                </div>
            </div>
        </Card>
    )
}
