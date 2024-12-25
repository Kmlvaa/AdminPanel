'use client'
import React from 'react'
import Header from '../../../../_components/mainLayout/contentHeader/index'
import NavLink from '../../../../_components/activeNavbar/index'
import Layout from '../../../../_components/mainLayout/layout'

export default function page({ children }: { children: React.ReactNode }) {

    return (
        <Layout>
            <div className=''>
                <Header header='Hesab ayarları' />
                <div className='w-full h-full shadow-[0px_0px_7px_0px_rgba(0,_0,_0,_0.1)] rounded-2xl p-7'>
                    <div className='flex flex-row items-start gap-10 border-b-[1px] border-b-gray-200 font-semibold'>
                        <NavLink title="Ümumi" url="/settings/general" />
                        <NavLink title="İmtahan" url="/settings/exam" />
                        <NavLink title="Ödəniş" url="/settings/payment" />
                    </div>
                    {children}
                </div>
            </div>
        </Layout>
    )
}
