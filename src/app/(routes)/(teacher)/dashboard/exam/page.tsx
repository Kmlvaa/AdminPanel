import React from 'react'
import Header from '../../../../_components/mainLayout/contentHeader/index'
import ExamCard from '../../../../_components/(teacher)/ExamCard/index'

export default function page() {
    return (
        <div>
            <Header header='İmtahanlarınız' />
            <div className=" flex flex-row items-start gap-10 flex-wrap">
                {cardDetails?.map((card) => {
                    return (
                        <ExamCard title={card.title} amount={card.amount} date={card.date} image={card.image} />
                    );
                })}
            </div>
        </div >
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
