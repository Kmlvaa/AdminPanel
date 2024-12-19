import React from 'react'
import ContentHeader from '../../../../_components/mainLayout/contentHeader'
import Notification from '../../../../_components/notification'
import Link from 'next/link';
import Image from 'next/image';
import { ClockCircleOutlined } from '@ant-design/icons';

export default function page() {

    return (
        <div>
            <div className="flex flex-row items-center justify-between">
                <div>
                    <ContentHeader header='Tələbələr' />
                </div>
            </div>
            <div className='pt-5'>
                <div className=''>
                    <ul className='flex flex-col'>
                        {data?.map((x) => {
                            return (
                                <li key={x.id}>
                                    <div className='flex flex-row items-center justify-between border-[1px] border-gray-300 p-3 rounded-xl my-1 hover:bg-[#F5F6FA] cursor-pointer'>
                                        <div className='flex flex-row items-center gap-10'>
                                            <Image src={x.userPhoto} alt='pp' width={40} height={40} className='w-14 h-14 rounded-full' />
                                            <div>
                                                <p className='font-semibold'>{x.exam}</p>
                                                <p>{x.name}</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-row items-center gap-20'>
                                            <div className=''>
                                                <div className='flex flex-row items-center gap-2'>
                                                    <p className='font-semibold'>{x.date}</p>
                                                    <ClockCircleOutlined />
                                                </div>
                                                <p className='text-gray-500'>{x.time}</p>
                                            </div>
                                            <div>
                                                <p className='text-lg font-semibold text-blue-600'>${x.amount}</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

const data = [
    {
        id: 1,
        name: 'ad soyad',
        exam: 'backend programlasdirma',
        date: '10.10.2020',
        time: '12:12',
        amount: '23.99',
        userPhoto: '/assets/pp.png'
    },
    {
        id: 2,
        name: 'ad soyad',
        exam: 'backend programlasdirma',
        date: '10.10.2020',
        time: '12:12',
        amount: '23.99',
        userPhoto: '/assets/pp.png'
    },
    {
        id: 3,
        name: 'ad soyad',
        exam: 'backend programlasdirma',
        date: '10.10.2020',
        time: '12:12',
        amount: '23.99',
        userPhoto: '/assets/pp.png'
    },
    {
        id: 4,
        name: 'ad soyad',
        exam: 'backend programlasdirma',
        date: '10.10.2020',
        time: '12:12',
        amount: '23.99',
        userPhoto: '/assets/pp.png'
    },
]