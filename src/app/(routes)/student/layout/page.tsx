import React from 'react'
import Header from './header/index'
import SEO from '@/app/_components/SEO/seo';

export default function page({
    children,
}: {
    children: React.ReactNode;
}) {


    return (
        <div className='px-20'>
            <head>
                <SEO title='Student panel' description='student page' />
            </head>
            <Header />
            {children}
        </div>
    )
}
