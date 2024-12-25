'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '../../../../../../public/assets/mobile logo.svg'
import CustomBtn from '../../../../_components/button/index'
import { Button, Dropdown, Input, Menu, MenuProps } from 'antd'
import { DownOutlined, FlagOutlined, SearchOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function index() {

  const [language, setLanguage] = useState('Eng');

  const handleLanguage = (e: any) => {
    setLanguage(e.key)
  }
  const menu = (
    <Menu onClick={handleLanguage}>
      <Menu.Item key="Eng"><FlagOutlined /> Eng</Menu.Item>
      <Menu.Item key="Az"><FlagOutlined /> Az</Menu.Item>
    </Menu>
  );

  const pathname = usePathname();
  const isActive = (path: any) => pathname === path;

  return (
    <div className='px-20 py-5 flex flex-row items-center justify-between gap-20'>
      <div className='flex flex-row items-center gap-3 w-1/2'>
        <Image src={Logo} alt='logo' />
        <Input placeholder='Search' prefix={<SearchOutlined />} size='small' className='border-0 w-full rounded-full p-2 text-gray-500 gap-2' />
      </div>
      <div className='flex flex-row items-center gap-10'>
        <div>
          <ul className='flex flex-row items-center gap-7'>
            <li><Link href='/student/exam' className={`hover:text-blue-500 ${isActive('/student/exam') ? 'border-b-2 border-[#1677FF] text-[#1677FF]' : ''}`}>Imtahanlar</Link></li>
            <li><Link href='/student/about' className={`hover:text-blue-500 ${isActive('/student/about') ? 'border-b-2 border-[#1677FF] text-[#1677FF]' : ''}`}>Biz kimik?</Link></li>
            <li><Link href='/student/FAQ' className={`hover:text-blue-500 ${isActive('/student/FAQ') ? 'border-b-2 border-[#1677FF] text-[#1677FF]' : ''}`}>FAQ</Link></li>
            <li>
              <Dropdown overlay={menu} trigger={["click"]}>
                <Button className='border-0'>{language} <DownOutlined /></Button>
              </Dropdown>
            </li>
          </ul>
        </div>
        <div className='flex flex-row items-center gap-3'>
          <CustomBtn name='Daxil ol' color='!text-blue-500 border-0 font-semibold hover:border-[1px]' />
          <CustomBtn name='Qeydiyyatdan keç' color='bg-blue-500' />
        </div>
      </div>
    </div>
  )
}
