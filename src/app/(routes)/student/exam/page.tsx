import React from 'react'
import Layout from '../layout/layout'
import Card from '../../../_components/(student)/Card/index'
import Header from '../../../_components/mainLayout/contentHeader/index'
import Link from 'next/link'


export default function page() {
    return (
        <Layout>
            <div className='ExamPage w-full h-28 flex items-center px-20'>
                <p className='text-white font-semibold'>Home &gt;&gt; Imtahanlar</p>
            </div>
            <div className='py-20 px-20'>
                <div className='flex flex-row items-center justify-between'>
                    <Header header='Imtahanlar' />
                    <p className='cursor-pointer text-blue-600 underline font-semibold hover:text-blue-500'>
                        <Link href='/student/exam'>Daha çox</Link>
                    </p>
                </div>
                <div className='w-full flex flex-row gap-5 flex-wrap items-center justify-center'>
                    {card?.map((card) => {
                        return (
                            <Card title={card.title} amount={card.amount} date={card.date} fullname={card.fullname} image={card.image} examId={card.id}/>
                        );
                    })}
                </div>
            </div>
        </Layout>
    )
}

const card = [
    {
        id: 1,
        title: 'Frontend programlasdirma',
        amount: '24.99',
        date: '10.12.2024',
        fullname: 'Aqil Quliyev',
        image: '/assets/card1.svg'
    },
    {
        id: 2,
        title: 'Backend programlasdirma',
        amount: '24.99',
        date: '10.12.2024',
        fullname: 'Aqil Quliyev',
        image: '/assets/card2.svg'
    },
    {
        id: 3,
        title: 'Backend programlasdirma',
        amount: '24.99',
        date: '10.12.2024',
        fullname: 'Aqil Quliyev',
        image: '/assets/card3.svg'
    },
]