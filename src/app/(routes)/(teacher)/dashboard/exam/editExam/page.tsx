import React from 'react'
import Header from '../../../../../_components/mainLayout/contentHeader/index'
import { DatePicker, Form, Input, Select, TimePicker } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import CustomBtn from '../../../../../_components/button/index'
import Layout from '../../../../../_components/mainLayout/layout'

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
                <Header header='Imtahana düzəliş et' />
                <div className='flex flex-row items-start justify-between w-full h-auto gap-10 mt-14'>
                    <div className='flex flex-col items-start w-full gap-5'>
                        <div className='flex !flex-col items-start gap-2 w-full'>
                            <label className='text-gray-800'>İmtahan adı</label>
                            <Input placeholder='İmtahan adını daxil edin' size='large' className='w-full' name='email' />
                        </div>
                        <div className='flex !flex-col items-start gap-2 w-full'>
                            <label className='text-gray-800'>İmtahan haqqında izah</label>
                            <Input placeholder='İmtahan haqqında qısa izah' size='large' className='w-full' name='email' />
                        </div>
                        <div className='flex !flex-col items-start gap-2 w-full'>
                            <label className='text-gray-800'>İmtahana giriş üçün xüsusi kod</label>
                            <Input placeholder='Kod' size='large' className='w-full' name='email' />
                        </div>
                        <div className='flex !flex-col items-start gap-2 w-full'>
                            <label className='text-gray-800'>İmtahan müddətini seçin</label>
                            <TimePicker use12Hours format="h:mm:ss A" />
                        </div>
                    </div>
                    <div className='flex flex-col items-start w-full gap-5'>
                        <div className='flex !flex-col items-start gap-2 w-full'>
                            <label className='text-gray-800'>Fənn seçin</label>
                            <Select options={questionType} size='large' className='w-full' placeholder='Fənni seçin' />
                        </div>
                        <div className='flex !flex-col items-start gap-2 w-full'>
                            <label className='text-gray-800'>İmtahan tipi</label>
                            <Select options={questionType} size='large' className='w-full' placeholder='Imtahan tipini seçin' />
                        </div>
                        <div className='flex !flex-col items-start gap-2 w-full'>
                            <label className='text-gray-800'>İmtahana giriş sayı</label>
                            <Input placeholder='Number' />
                        </div>
                        <div className='flex !flex-col items-start gap-2 w-full'>
                            <label className='text-gray-800'>Doğum günü</label>
                            <DatePicker className='w-full' size='large' />
                        </div>
                    </div>
                </div>
                <div className='w-40 float-right mt-16'>
                    <CustomBtn name=' Yadda saxla' color='bg-blue-500' />
                </div>
            </Form>
        </Layout>
    )
}
