'use client'
import React from 'react'
import Header from '../../../../_components/mainLayout/contentHeader/index'
import NavLink from '../../../../_components/activeNavbar/index'

export default function page({ children }: { children: React.ReactNode }) {

    return (
        <div className=''>
            <Header header='Hesab ayarları' />
            <div className='w-full h-full shadow-[0px_0px_7px_0px_rgba(0,_0,_0,_0.1)] rounded-2xl p-7'>
                <div className='flex flex-row items-start gap-10 border-b-[1px] border-b-gray-200 font-semibold'>
                    <NavLink title="Profili düzəlt" url="/accountSettings/editProfile"/>
                    <NavLink title="Təhlükəsizlik" url="/accountSettings/security"/>
                </div>
                {children}
            </div>
        </div>
    )
}
