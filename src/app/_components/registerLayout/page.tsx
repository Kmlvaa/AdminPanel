'use client'
import React from 'react'
import Layout from '../AccountLayout/page'
import { Steps } from 'antd'

export default function page({ children }: { children: React.ReactNode }) {
    return (
        <Layout>
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
