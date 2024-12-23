import React from 'react'
import Header from './header/index'

export default function page({
    children,
}: {
    children: React.ReactNode;
}) {


    return (
        <div className='px-20'>
            <Header />
            {children}
        </div>
    )
}
