import React from 'react'
import Layout from './layout/layout'
import Btn from '../../_components/button/index'
import Image from 'next/image'
import Clock from '../../../../public/assets/alarm clock 2 1.svg'
import clk1 from '../../../../public/assets/Frame 2608531.svg'
import clk2 from '../../../../public/assets/Frame 2608532.svg'
import clk3 from '../../../../public/assets/Frame 2608533.svg'
import Header from '../../_components/mainLayout/contentHeader/index'
import Card from '../../_components/(student)/Card/index'
import Link from 'next/link'

export default function page() {
    return (
        <Layout>
            <div className='flex flex-row justify-between px-20 py-10'>
                <div className='w-1/2 flex flex-col items-start gap-16 py-20'>
                    <div className='flex flex-col gap-5 justify-end'>
                        <h1 className='font-bold text-6xl whitespace-pre-wrap'>
                            <p>Online</p>
                            <span className='text-blue-600'>imtahanlarda</span>
                            <p>sürətli və asan öyrən</p>
                        </h1>
                        <p className='text-xl'>İmtahanlarınızı planlaşdırın, idarə edin və təhlil edin – hamısı bir platformada.</p>
                    </div>
                    <Btn name='Qeydiyyatdan keç' color='bg-blue-500 !w-40' />
                </div>
                <div className='w-1/2 h-[500px] relative right-0'>
                    <Image src={Clock} alt='clock' className='w-full h-full' />
                    <Image src={clk2} alt='clock' className='absolute -top-10 left-20 w-36 h-36' />
                    <Image src={clk1} alt='clock' className='absolute top-72 -left-40 w-40 h-40' />
                    <Image src={clk3} alt='clock' className='absolute right-6 bottom-0 w-40 h-40' />
                </div>
            </div>
            <div className='py-20 px-20'>
                <div className='flex flex-row items-center justify-between'>
                    <Header header='Imtahanlar'/>
                    <p className='cursor-pointer text-blue-600 underline font-semibold hover:text-blue-500'>
                        <Link href='/student/exam'>Daha çox</Link>
                    </p>
                </div>
                <div className='w-full flex flex-row gap-5 flex-wrap items-center justify-center'>
                    <Card title='Backend programlasdirma' amount='24.99' date='10.12.2024' fullname='Aqil Quliyev' image='/assets/card1.svg'/>
                    <Card title='Backend programlasdirma' amount='24.99' date='10.12.2024' fullname='Aqil Quliyev' image='/assets/card2.svg'/>
                    <Card title='Backend programlasdirma' amount='24.99' date='10.12.2024' fullname='Aqil Quliyev' image='/assets/card3.svg'/>  
                </div>
            </div>
        </Layout>
    )
}
