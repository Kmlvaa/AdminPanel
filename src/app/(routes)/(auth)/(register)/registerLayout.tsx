'use client'
import React from 'react'
import Layout from '../accountLayout'
import { Steps } from 'antd'
import SEO from '@/app/_components/SEO/seo'

export default function registerLayout({ children }: { children: React.ReactNode }) {
    return (
        <Layout>
            <SEO title='Qeydiyyatdan keç' description='register page'/>
            <div className='w-96 m-auto py-8 text-white'>
                <Steps
                    current={1}
                    items={[
                        {
                            title: 'Finished',
                            description: "description",
                        },
                        {
                            title: 'In Progress',
                            description: "description",
                        },
                    ]}
                />
            </div>
            <div className='w-full h-auto flex items-center justify-center'>
                {children}
            </div>
        </Layout>
    )
}
