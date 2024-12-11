'use client'
import React from 'react'
import Layout from '../AccountLayout/page'

export default function page({ children }: { children: React.ReactNode }) {
    return (
        <Layout>
            <div className='flex flex-row items-center justify-center gap-10 py-8 text-white'>
                <div className='flex flex-row items-start gap-5'>
                    <div className='bg-white rounded-full w-8 h-8 flex items-center justify-center'>
                        <p className='relative text-green-700'>1</p>
                    </div>
                    <div className='flex flex-col items-start justify-center'>
                        <p>Finished</p>
                        <p className='text-sm'>This is a description</p>
                    </div>
                </div>
                <div className='bg-white h-px w-1/4'></div>
                <div className='flex flex-row items-start justify-start gap-5'>
                    <div className='bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center'>
                        <p className='relative text-white'>2</p>
                    </div>
                    <div className='flex flex-col items-start justify-center'>
                        <p>In Progress</p>
                        <p className='text-sm'>This is a description</p>
                    </div>
                </div>
            </div>
            <div className='w-full h-auto flex items-center justify-center'>
                {children}
            </div>
        </Layout>
    )
}
