import { Cascader, Checkbox, Form, Input } from 'antd'
import {Input as PInput} from 'antd'
import Link from 'next/link'
import React from 'react'
import CustomBtn from '../../../../_components/button/page'
import RegisterLayout from '../registerLayout'

export default function page() {

    const options = [
        {
            value: 'teacher',
            label: 'teacher',
        },
        {
            value: 'student',
            label: 'student',
        },
    ];

    return (
        <RegisterLayout>
            <Form className='w-4/5 m-auto h-auto py-12 px-12 bg-white rounded-2xl text-center flex flex-col gap-3'>
                <h1 className='text-3xl font-bold mb-10'>Hesab yarat</h1>
                <div className='flex flex-row items-center justify-center w-full gap-5'>
                    <div className='flex !flex-col items-start gap-2 w-full'>
                        <label className='text-gray-800'>Ad və soyad</label>
                        <Input placeholder='Ad soyad daxil edin' size='large' className='Input-field' style={{ backgroundColor: '#F5F6FA' }} />
                    </div>
                    <div className='flex !flex-col items-start gap-2 w-full'>
                        <label className='text-gray-800'>Email address</label>
                        <Input placeholder='Email daxil edin' size='large' className='Input-field' style={{ backgroundColor: '#F5F6FA' }} />
                    </div>
                </div>
                <div className='flex flex-row items-center justify-center w-full gap-5'>
                    <div className='flex flex-col justify-between items-start w-full'>
                        <label className='text-gray-800'>Password</label>
                        <Input type='password' size='large'/>
                        {/* <Input.Password placeholder='Password daxil edin' size='large' className='Input-field' style={{ backgroundColor: '#F5F6FA' }} /> */}
                    </div>
                    <div className='flex !flex-col items-start gap-2 w-full'>
                        <label className='text-gray-800'>Telefon nömrəsi</label>
                        <Input placeholder='telefon nömrəsi daxil edin' size='large' className='Input-field' style={{ backgroundColor: '#F5F6FA' }} />
                    </div>
                </div>
                <div className='flex flex-row items-start justify-between w-full gap-5'>
                    <div className='flex !flex-col gap-2 w-full'>
                        <div className='flex flex-row justify-between items-center w-full'>
                            <label className='text-gray-800'>Password</label>
                        </div>
                        {/* <Input.Password placeholder='Password daxil edin' size='large' className='Input-field' style={{ backgroundColor: '#F5F6FA' }} /> */}
                        <Input type='password' size='large'/>
                        {/* to show error set property status='error' in input */}
                        <Checkbox>Remember Password</Checkbox>
                    </div>
                    <div className='flex !flex-col items-start gap-2 w-full'>
                        <label className='text-gray-800'>Rolunuzu seçin</label>
                        <Cascader options={options} placeholder="Rolu secin" style={{ width: '100%', backgroundColor: '#F5F6FA' }} size='large' />
                    </div>
                </div>
                <div className='mt-10 w-2/5 m-auto flex flex-col gap-2'>
                    <CustomBtn name='Qeydiyyatdan keç' color='bg-blue-500'/>
                    <p>Hesabınız var? <Link href='/login' className='text-blue-500 font-semibold underline cursor-pointer'>Daxil olun</Link></p>
                </div>
            </Form>
        </RegisterLayout>
    )
}

// registerAll.getLayout = function getLayout(page) {
//     return <RegisterLayout>{page}</RegisterLayout>
// }

