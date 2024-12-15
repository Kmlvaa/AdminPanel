'use client'
import React, { useState } from 'react'
import { DatePicker, Form, Input, Select, Upload } from 'antd'
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
                <div className='flex flex-col gap-5 items-center my-10'>
                    <div className='w-[100px] h-[100px]'>
                        <Upload
                            showUploadList={false}
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                        >
                            <div className='w-[80px] h-[80px] rounded-full border-2 border-[#d9d9d9] flex justify-center items-center overflow-hidden cursor-pointer relative'>
                                {imageUrl ? (
                                    <Image src={imageUrl}
                                        alt="uploaded"
                                        className='w-full h-full bg-cover' width={100} height={100} />
                                ) : (
                                    <PlusOutlined style={{ fontSize: 24, color: "#999" }} />
                                )}
                            </div>
                        </Upload>
                        <p className='text-[#1677FF] font-semibold'>Upload Logo</p>
                    </div>
                    <div className='flex flex-row items-start justify-between w-full h-auto gap-10'>
                        <div className='flex flex-col items-start w-full gap-5'>
                            <div className='flex !flex-col items-start gap-2 w-full'>
                                <label className='text-gray-800'>Sayt adı</label>
                                <Input placeholder='X academy' size='large' className='w-full' name='email' />
                            </div>
                            <div className='flex !flex-col items-start gap-2 w-full'>
                                <div className='flex !flex-col items-start gap-2 w-full'>
                                    <label className='text-gray-800'>Dil</label>
                                    <Select options={[
                                        { id: 1, value: 'option1', label: 'option1' },
                                        { id: 2, value: 'option2', label: 'option2' }
                                    ]} defaultValue='option1' size='large' className='w-full' />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-start w-full gap-5'>
                            <div className='flex !flex-col items-start gap-2 w-full'>
                                <label className='text-gray-800'>Copy right</label>
                                <Input placeholder='@com' size='large' type='password' className='w-full' name='email' />
                            </div>
                            <div className='flex !flex-col items-start gap-2 w-full'>
                                <label className='text-gray-800'>SEO title</label>
                                <Input placeholder='X academy' size='large' className='w-full' name='email' />
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

