import { Form, Input, Select } from 'antd'
import React from 'react'
import Layout from '../(layout)/page'
import Button from '../../../../_components/button/index'

export default function page() {

    const questionType = [
        {
            id: 1,
            value: 'option1',
            label: 'Option1'
        },
        {
            id: 2,
            value: 'option2',
            label: 'Option2'
        },
    ]
    return (
        <Layout>
            <Form>
                <div className='flex flex-row items-start w-full gap-5 my-10'>
                    <div className='w-1/2 flex flex-col gap-5'>
                        <div className='flex !flex-col items-start gap-2 w-full'>
                            <label className='text-gray-800'>Sual növü</label>
                            <Select options={questionType} size='large' className='w-full' />
                        </div>
                        <div className='flex !flex-col items-start gap-2 w-full'>
                            <label className='text-gray-800'>Sual limitləri</label>
                            <Select options={questionType} size='large' className='w-full' />
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <div className='flex !flex-col items-start gap-2 w-full'>
                            <label className='text-gray-800'>Vaxt məhdudiyyəti</label>
                            <Select options={questionType} size='large' className='w-full' />
                        </div>
                    </div>
                </div>
                <div className='relative w-full h-full mt-40'>
                    <div className='absolute right-7 bottom-0 w-[200px]'>
                        <Button color='bg-blue-500' name='Yadda saxla' />
                    </div>
                </div>
            </Form>
        </Layout>
    )
}
