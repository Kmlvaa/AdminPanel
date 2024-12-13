import React from 'react'
import ContentHeader from '../../../_components/contentHeader/page'
import Notification from '../../../_components/notification/page'
import Link from 'next/link';

export default function page() {

    const messages = [
        {
            id: 1,
            name: 'Yeni kurs əlavə edildi'
        },
        {
            id: 2,
            name: 'Kurs alındı'
        },
        {
            id: 3,
            name: 'Endirim oldu'
        },
    ];
    return (
        <div>
            <div className="flex flex-row items-center justify-between">
                <div>
                    <ContentHeader header='Bildirişlər' />
                </div>
                    <Link href='/' className='underline text-blue-500 font-semibold'>Gözdən keçir</Link>
            </div>
            <div className='py-14'>
                <div className=''>
                    <ul className='flex flex-col gap-10'>
                        {messages.map((message) => {
                            return (
                                <li key={message.id}>
                                    <p className='font-semibold mb-3'>{message.name}</p>
                                    <div>
                                        <Notification />
                                        <Notification />
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
