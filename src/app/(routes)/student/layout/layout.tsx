import React from 'react'
import Header from './header/index'
import Footer from './footer/index'
import SEO from '@/app/_components/SEO/seo';

export default function page({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <div className=''>
            <head>
                <SEO title='Student panel' description='student page' />
            </head>
            <Header />
            <div className=''>
                {children}
            </div>
            <Footer />
        </div>
    )
}
