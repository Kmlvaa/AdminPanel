import React from 'react'
import Layout from '../../_components/AccountLayout/page'
import { Form } from 'antd'

export default function page({ children }: { children: React.ReactNode }) {
    return (
        <Layout>
            <div className='w-full h-full flex items-center justify-center'>
                <Form className='w-2/5 max-lg:w-1/2 max-md:w-3/4 m-auto h-auto py-16 px-16 bg-white rounded-2xl text-center flex flex-col gap-5'>
                    {children}
                </Form>
            </div>
        </Layout>
    )
}
