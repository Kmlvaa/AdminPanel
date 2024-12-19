import React from 'react'
import Header from '../../../_components/mainLayout/contentHeader/index'
import CustomBtn from '../../../_components/button/index'
import Link from 'next/link'
import { FallOutlined, PlusOutlined, RiseOutlined } from '@ant-design/icons'
import Card from '../../../_components/statisticCard/index'
import ExamCard from '../../../_components/(teacher)/ExamCard/index'

export default function page() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row items-center justify-between">
                <div>
                    <Header header='Dashboard' />
                </div>
                <div>
                    <Link href='/exam/createExam'><CustomBtn name=' Yeni imtahan yarat' color='bg-blue-500' prefix={<PlusOutlined />} /></Link>
                </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-5">
                <Card title='Tələbə sayı' totalValue='38,929' statistic='Up from yesterday' statisticValue={2.3} color='orange' imageUrl="/assets/cardImage1.svg" icon={RiseOutlined} />
                <Card title='İmtahana baxış' totalValue={18282} statistic='Up from yesterday' statisticValue={3.5} color='green' imageUrl='/assets/cardImage2.svg' icon={RiseOutlined} />
                <Card title='Nəticə faizi' totalValue='$82,191' statistic='Down from yesterday' statisticValue={9.8} color='red' imageUrl='/assets/cardImage3.svg' icon={FallOutlined} />
            </div>
            <br />
            <br />
            <Header header='İmtahanlarınız'/>
            <div className=" flex flex-row items-start gap-10 flex-wrap">
                {cardDetails?.map((card) => {
                    return (
                        <ExamCard title={card.title} amount={card.amount} date={card.date} image={card.image} />
                    );
                })}
            </div>
        </div>
    )
}
const cardDetails = [
    {
        id: 1,
        title: 'UX UI dizayn',
        amount: '38.20',
        date: '10.11.2023',
        image: '/assets/card1.svg'
    },
    {
        id: 2,
        title: 'Backend programlasdirma',
        amount: '38.20',
        date: '10.11.2023',
        image: '/assets/card2.svg'
    },
    {
        id: 3,
        title: 'Frontend programlasdirma',
        amount: '38.20',
        date: '10.11.2023',
        image: '/assets/card3.svg'
    },
]
