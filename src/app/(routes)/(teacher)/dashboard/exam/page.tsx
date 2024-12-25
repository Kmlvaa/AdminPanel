import React from 'react'
import Header from '../../../../_components/mainLayout/contentHeader/index'
import ExamCard from '../../../../_components/(teacher)/ExamCard/index'
import CustomBtn from '../../../../_components/button/index'
import { PlusOutlined } from '@ant-design/icons'
import Layout from '../../../../_components/mainLayout/layout'

export default function page() {
    return (
        <Layout>
            <div>
                <div className="flex flex-row items-center justify-between">
                    <div>
                        <Header header='İmtahanlarınız' />
                    </div>
                    <div>
                        <CustomBtn name=' Yeni imtahan yarat' color='bg-blue-500' prefix={<PlusOutlined />} />
                    </div>
                </div>
                <div className="flex flex-row items-start gap-10 flex-wrap">
                    {cardDetails?.map((card) => {
                        return (
                            <ExamCard title={card.title} amount={card.amount} date={card.date} image={card.image} />
                        );
                    })}
                </div>
            </div >
        </Layout>
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
