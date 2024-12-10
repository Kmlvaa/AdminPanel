'use client'
import React from 'react'
import Layout from '../../account/page'
import { Button, Checkbox, Dropdown, Form, Input, Menu, Space } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons';

export default function page() {

    const handleMenuClick = (e) => {
        console.log('click', e);
    };

    const menu = (
        <Menu
            onClick={handleMenuClick}
            items={[
                {
                    label: '1st menu item',
                    key: '1',
                    icon: <UserOutlined />,
                },
                {
                    label: '2nd menu item',
                    key: '2',
                    icon: <UserOutlined />,
                },
                {
                    label: '3rd menu item',
                    key: '3',
                    icon: <UserOutlined />,
                },
            ]}
        />
    );

    return (
        <Layout>
            <div className='w-full h-full flex items-center justify-center'>
                <Form className='w-4/5 m-auto h-auto py-16 px-12 bg-white rounded-2xl text-center flex flex-col gap-5'>
                    <h1 className='text-3xl font-bold mb-10'>Hesab yarat</h1>
                    <div className='flex flex-row items-center justify-center w-full gap-5'>
                        <div className='flex !flex-col items-start gap-2 w-full'>
                            <label className='text-gray-800'>Ad və soyad</label>
                            <Input placeholder='Ad soyad daxil edin' size='large' className='Input-field' />
                        </div>
                        <div className='flex !flex-col items-start gap-2 w-full'>
                            <label className='text-gray-800'>Email address</label>
                            <Input placeholder='Email daxil edin' size='large' className='Input-field' />
                        </div>
                    </div>
                    <div className='flex flex-row items-center justify-center w-full gap-5'>
                        <div className='flex flex-col justify-between items-start w-full'>
                            <label className='text-gray-800'>Password</label>
                            <Input.Password placeholder='Password daxil edin' size='large' className='Input-field' />
                        </div>
                        <div className='flex !flex-col items-start gap-2 w-full'>
                            <label className='text-gray-800'>Telefon nömrəsi</label>
                            <Input placeholder='telefon nömrəsi daxil edin' size='large' className='Input-field' />
                        </div>
                    </div>
                    <div className='flex flex-row items-center justify-between w-full gap-5'>
                        <div className='flex !flex-col gap-2 w-full'>
                            <div className='flex flex-row justify-between items-center w-full'>
                                <label className='text-gray-800'>Password</label>
                            </div>
                            <Input.Password placeholder='Password daxil edin' size='large' className='Input-field' />
                            {/* to show error set property status='error' in input */}
                            <Checkbox>Remember Password</Checkbox>
                        </div>
                        <div className='flex !flex-col items-start gap-2 w-full'>
                            <label className='text-gray-800'>Rolunuzu seçin</label>
                            <Dropdown overlay={menu}>
                                <Button>
                                    <Space>
                                        Button
                                        <DownOutlined />
                                    </Space>
                                </Button></Dropdown>
                        </div>
                    </div>
                    <div className='mt-10 w-2/5 m-auto flex flex-col gap-2'>
                        <Button type='primary' size='large' block>Qeydiyyatdan keçin</Button>
                        <p>Hesabınız var? <span className='text-blue-500 font-semibold underline cursor-pointer'>Daxil olun</span></p>
                    </div>
                </Form>
            </div>
        </Layout>
    )
}
