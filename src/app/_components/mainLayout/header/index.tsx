'use client'
import { DownOutlined, FlagOutlined, MenuFoldOutlined, MenuUnfoldOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Dropdown, Input, Menu} from 'antd'
import { Header } from 'antd/es/layout/layout'
import Image from 'next/image'
import pp from '/public/assets/pp.png'
import { useState } from 'react'

export default function index(props: { collapsed: any; toggleCollapsed: React.MouseEventHandler<HTMLElement> | undefined }) {

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

    return (
        <Header className={`bg-white top-0 right-0 h-20 ${props.collapsed ? 'left-[100px]' : 'left-[250px]'} transition-all fixed z-10 flex items-center justify-between py-3 px-12 leading-normal`}>
            <div className='flex flex-row items-center gap-5 w-1/2'>
                <Button shape='circle' size='large' onClick={props.toggleCollapsed} className='border-0'>
                    {props.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
                <Input placeholder='Search' prefix={<SearchOutlined />} size='large' className='w-2/3 rounded-full h-auto bg-[#F5F6FA]' />
            </div>
            <div className='w-1/3 max-lg:w-1/2 flex flex-row items-center justify-center gap-3'>
                <div>
                    <Dropdown overlay={menu} trigger={["click"]}>
                        <Button className='border-0'>{language} <DownOutlined /></Button>
                    </Dropdown>
                </div>
                <div className='flex flex-row items-center justify-center gap-2'>
                    <Image src={pp} alt='pp' width={50} height={50} className='rounded-full' />
                    <div className='flex flex-col items-start'>
                        <p className='font-bold'>Ad Soyad</p>
                        <p className='text-sm'>Admin</p>
                    </div>
                </div>
            </div>
        </Header>
    )
}
