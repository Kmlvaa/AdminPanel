import React from 'react'
import Header from '../../../_components/mainLayout/contentHeader'
import { DownOutlined, FilterOutlined, ReloadOutlined } from '@ant-design/icons'
import { Button, Dropdown, Menu, MenuProps } from 'antd'
import Table from '../../../_components/examTable'
import { PlusOutlined } from '@ant-design/icons';
import CustomBtn from '../../../_components/button'
import Link from 'next/link'

export default function page() {

    const tarix: MenuProps['items'] = [
        { key: 1, label: '10.10.2020' },
        { key: 2, label: '24.02.2020' },
    ]
    const level: MenuProps['items'] = [
        { key: 1, label: 'Easy' },
        { key: 2, label: 'Medium' },
        { key: 3, label: 'hard' },
    ]
    const ixtisas: MenuProps['items'] = [
        { key: 1, label: 'Eng' },
        { key: 2, label: 'Az' },
    ]

    return (
        <div className='flex flex-col gap-3'>
            <div className="flex flex-row items-center justify-between">
                <div>
                    <Header header='Imtahanlar' />
                </div>
                <div>
                    <Link href='/exam/createExam'><CustomBtn name=' Yeni imtahan yarat' color='bg-blue-500' prefix={<PlusOutlined />} /></Link>
                </div>
            </div>
            <div className='flex flex-row items-center justify-between w-2/3 py-2 px-5 border-[1px] border-gray-300 rounded-lg font-semibold'>
                <FilterOutlined />
                <p>Filtrlə</p>
                <Dropdown overlay={<Menu items={tarix} />} trigger={["click"]}>
                    <Button className='border-0 font-semibold'>Tarix <DownOutlined /></Button>
                </Dropdown>
                <Dropdown overlay={<Menu items={ixtisas} />} trigger={["click"]}>
                    <Button className='border-0 font-semibold'>Ixtisas <DownOutlined /></Button>
                </Dropdown>
                <Dropdown overlay={<Menu items={level} />} trigger={["click"]}>
                    <Button className='border-0 font-semibold'>Çətinlik dərəcəsi <DownOutlined /></Button>
                </Dropdown>
                <p className='text-red-500 font-semibold'><ReloadOutlined /> Reset filter</p>
            </div>
            <div>
                <Table />
            </div>
        </div>
    )
}
