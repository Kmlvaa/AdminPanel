'use client'
import { Button, Cascader, Checkbox, Form, Input, Upload, UploadProps } from 'antd'
import { Input as PInput } from 'antd'
import Link from 'next/link'
import React from 'react'
import CustomBtn from '../../../../_components/button/page'
import RegisterLayout from '../../../../_components/registerLayout/page'
import { UploadOutlined } from '@ant-design/icons'

export default function page() {

    const uni = [
        {
            value: 'Baku Engineering University',
            label: 'Baku Engineering University',
        },
        {
            value: 'Baku Engineering University',
            label: 'Baku Engineering University',
        },
        {
            value: 'Baku Engineering University',
            label: 'Baku Engineering University',
        },
        {
            value: 'Baku Engineering University',
            label: 'Baku Engineering University',
        },
    ];
    const fakulte = [
        {
            value: 'Security of computer systems ',
            label: 'Security of computer systems ',
        },
        {
            value: 'Maşın öyrənmənin əsasları ',
            label: 'Maşın öyrənmənin əsasları ',
        },
        {
            value: 'Security of computer systems ',
            label: 'Security of computer systems ',
        },
        {
            value: 'Maşın öyrənmənin əsasları ',
            label: 'Maşın öyrənmənin əsasları ',
        },
    ];
    const level = [
        {
            value: 'Security of computer systems ',
            label: 'Security of computer systems ',
        },
        {
            value: 'Maşın öyrənmənin əsasları ',
            label: 'Maşın öyrənmənin əsasları ',
        },
    ];

    return (
        <RegisterLayout>
            <Form className='w-4/5 m-auto h-auto py-12 px-12 bg-white rounded-2xl text-center flex flex-col gap-3'>
                <h1 className='text-3xl font-bold mb-10'>Hesab yarat</h1>
                <div className='flex flex-row items-center justify-center w-full gap-5'>
                    <div className='flex !flex-col items-start gap-2 w-full'>
                        <label className='text-gray-800'>Universitet</label>
                        <Cascader options={uni} placeholder="Fənn" size='large' className='w-full bg-[#F5F6FA]' />
                    </div>
                    <div className='flex !flex-col items-start gap-2 w-full'>
                        <label className='text-gray-800'>Təhsil səviyyəniz</label>
                        <Cascader options={level} placeholder="Təcrübə ili" size='large' className='w-full bg-[#F5F6FA]' />
                    </div>
                </div>
                <div className='flex flex-row items-start justify-between w-full gap-5'>
                    <div className='flex !flex-col gap-2 w-1/2'>
                        <div className='flex flex-row justify-between items-center w-full'>
                            <label className='text-gray-800'>Fakültə</label>
                        </div>
                        <Cascader options={fakulte} placeholder="Rolu secin" size='large' className='w-full bg-[#F5F6FA]' />
                        {/* to show error set property status='error' in input */}
                        <Checkbox>Qaydaları və şərtləri qəbul edirəm</Checkbox>
                    </div>
                    <div className='w-1/2'></div>
                </div>
                <div className='mt-10 w-2/5 m-auto flex flex-col gap-2'>
                    <CustomBtn name='Qeydiyyatdan keç' color='bg-blue-500'/>
                    <p>Hesabınız var? <Link href='/pages/account/login' className='text-blue-500 font-semibold underline cursor-pointer'>Daxil olun</Link></p>
                </div>
            </Form>
        </RegisterLayout>
    )
}

const props: UploadProps = {
    name: 'file',
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            console.log(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            console.log(`${info.file.name} file upload failed.`);
        }
    },
};