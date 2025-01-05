import React from 'react'
import Layout from '../layout/layout'
import Header from '../../../_components/mainLayout/contentHeader/index'
import Card from '../../../_components/(student)/aboutCard/index'

export default function page() {
    return (
        <Layout>
            <div className='ExamPage w-full h-28 flex items-center px-20'>
                <p className='text-white font-semibold'>Home &gt;&gt; Imtahanlar</p>
            </div>
            <div className='py-20 px-20'>
                <div className='flex flex-row items-center justify-between'>
                    <Header header='Biz kimik?' />
                </div>
                <p className='text-xl font-sans font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia incidunt suscipit culpa repellendus. Odit quod nostrum commodi amet eligendi,
                    hic quasi qui iste, architecto natus maxime eaque nulla ex provident!
                    Mollitia incidunt suscipit culpa repellendus. Odit quod nostrum commodi amet eligendi,
                    hic quasi qui iste, architecto natus maxime eaque nulla ex provident!</p>
            </div>
            <div className='py-10 px-20'>
                <div className='flex flex-row items-center justify-between'>
                    <Header header='Dəyərlərimiz' />
                </div>
                <div className='leading-10'>
                    <p className='font-normal'>✅ Ədalətlilik: İmtahanlar hər kəs üçün eyni şəffaflıqda təşkil olunur.</p>
                    <p className='font-normal'>✅ Təhlükəsizlik: Anti-cheat texnologiyası ilə tam təhlükəsizlik təmin edirik.</p>
                    <p className='font-normal'>✅ İnnovasiya: Təhsil texnologiyalarında yeniliklərə açığıq.</p>
                    <p className='font-normal'>✅ Davamlı inkişaf: Platformanı daim təkmilləşdiririk.</p>
                </div>
            </div>
            <div className='py-10 px-20'>
                <div className='flex flex-row items-center justify-between'>
                    <Header header='Nailiyyətlərimiz' />
                </div>
                <div className='flex flex-row items-center justify-around py-10'>
                    <Card title='Tələbə' count='👩‍🎓 10,000+'/>
                    <Card title='İmtahan' count='📚 5,000+'/>
                    <Card title='Ölkə' count='🌐 20+'/>
                </div>
            </div>
        </Layout>
    )
}
