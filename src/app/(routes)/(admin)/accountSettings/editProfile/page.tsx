'use client'
import React, { useState } from 'react'
import { DatePicker, Form, Input, Upload } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import UploadPen from '../../../../../../public/assets/Group 194.svg'
import Image from 'next/image';
import Layout from '../(layout)/page'
import Button from '../../../../_components/button/index'

export default function page() {

    const [imageUrl, setImageUrl] = useState<any>(null);

    const beforeUpload = (file: any) => {
        const isImage = file.type.startsWith("image/");
        if (!isImage) {
            console.log("You can only upload image files!");
        }
        return isImage;
    };

    const handleChange = (info: any) => {
        if (info.file.status === "done" || info.file.originFileObj) {
            const reader = new FileReader();
            reader.onload = () => {
                setImageUrl(reader.result);
            };
            reader.readAsDataURL(info.file.originFileObj);
        }
    };
    return (
        <Layout>
            <Form>
                <div className='flex flex-row item gap-10 my-10'>
                    <div className='w-[150px] h-[150px] relative'>
                        <Upload
                            showUploadList={false}
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                        >
                            <div className='w-[120px] h-[120px] rounded-full border-2 border-[#d9d9d9] flex justify-center items-center overflow-hidden cursor-pointer relative'>
                                {imageUrl ? (
                                    <Image src={imageUrl}
                                        alt="uploaded"
                                        className='w-full h-full bg-cover' width={100} height={100} />
                                ) : (
                                    <PlusOutlined style={{ fontSize: 24, color: "#999" }} />
                                )}
                            </div>
                        </Upload>
                        <Image alt='pen' src={UploadPen} className='absolute right-0 bottom-10 cursor-pointer' />
                    </div>
                    <div className='flex flex-row items-start justify-between w-full h-auto gap-10'>
                        <div className='flex flex-col items-start w-full gap-5'>
                            <div className='flex !flex-col items-start gap-2 w-full'>
                                <label className='text-gray-800'>Ad soyad</label>
                                <Input placeholder='Ad soyad daxil edin' size='large' className='w-full' name='email' />
                            </div>
                            <div className='flex !flex-col items-start gap-2 w-full'>
                                <label className='text-gray-800'>Email address</label>
                                <Input placeholder='Email daxil edin' size='large' className='w-full' name='email' />
                            </div>
                            <div className='flex !flex-col items-start gap-2 w-full'>
                                <label className='text-gray-800'>Doğum günü</label>
                                <DatePicker className='w-full' size='large' />
                            </div>
                        </div>
                        <div className='flex flex-col items-start w-full gap-5'>
                            <div className='flex !flex-col items-start gap-2 w-full'>
                                <label className='text-gray-800'>Password</label>
                                <Input placeholder='Password daxil edin' size='large' type='password' className='w-full' name='email' />
                            </div>
                            <div className='flex !flex-col items-start gap-2 w-full'>
                                <label className='text-gray-800'>Ölkə</label>
                                <Input placeholder='Ölkə daxil edin' size='large' className='w-full' name='email' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative w-full h-full mt-40'>
                    <div className='absolute right-7 bottom-7 w-[200px]'>
                        <Button color='bg-blue-500' name='Yadda saxla' />
                    </div>
                </div>
            </Form>
        </Layout>
    )
}
