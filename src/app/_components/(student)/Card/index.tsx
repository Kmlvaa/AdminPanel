import { CloseCircleOutlined } from '@ant-design/icons'
import { Button, Card } from 'antd'
import Image from 'next/image'
import React from 'react'

export default function index(props: any) {
    return (
        <Card className='w-auto h-full rounded-lg p-3 hover:bg-gray-50 hover:border-blue-200'>
            <Image src={props.image} alt='image card' width={250} height={250} className='cover w-64 h-64' />
            <div className='flex flex-col gap-10'>
                <div className='flex flex-row items-center justify-between'>
                    <div>
                        <h3 className='font-semibold'>{props.title}</h3>
                        <p>{props.fullname}</p>
                    </div>
                    <div>
                        <p className='text-blue-600 font-semibold text-lg'>${props.amount}</p>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-between'>
                    <div>
                        <p className=''>{props.date}</p>
                    </div>
                    <div>
                        <Button className='py-1 px-3 border-[1px] border-red-600 text-red-600 font-semibold hover:!bg-red-600 hover:!text-white hover:!border-red-600'>Imtahanı al</Button>
                    </div>
                </div>
            </div>
        </Card>
    )
}
