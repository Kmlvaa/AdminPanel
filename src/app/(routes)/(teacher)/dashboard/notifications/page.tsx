import React from 'react'
import ContentHeader from '../../../../_components/mainLayout/contentHeader'
import Notification from '../../../../_components/notification'
import Link from 'next/link';
import Layout from '../../../../_components/mainLayout/layout'

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

    const teacherMsgs = messages.find(x => x.id == 2)
    return (
        <Layout>
            <div>
                <div className="flex flex-row items-center justify-between">
                    <div>
                        <ContentHeader header='Bildirişlər' />
                    </div>
                </div>
                <div className='pt-5'>
                    <div className=''>
                        <ul className='flex flex-col gap-10'>
                            <li key={teacherMsgs?.id}>
                                <div className='flex flex-row items-center justify-between'>
                                    <p className='font-semibold mb-3'>{teacherMsgs?.name}</p>
                                    <Link href='/' className='underline text-blue-500 font-semibold hover:underline hover:text-red-600'>Gözdən keçir</Link>
                                </div>
                                <div>
                                    <Notification title='Meeting with CEO' />
                                    <Notification title='Meeting with CEO' />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
