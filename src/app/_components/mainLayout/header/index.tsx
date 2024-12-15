import { DownOutlined, FlagOutlined, MenuFoldOutlined, MenuUnfoldOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Dropdown, Input, Menu, MenuProps } from 'antd'
import { Header } from 'antd/es/layout/layout'
import Image from 'next/image'
import pp from '/public/assets/pp.png'

export default function index(props: { collapsed: any; toggleCollapsed: React.MouseEventHandler<HTMLElement> | undefined }) {

    const items: MenuProps['items'] = [
        { key: 1, icon: <FlagOutlined />, label: 'Eng' },
        { key: 2, icon: <FlagOutlined />, label: 'Az' },
    ]

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
                    <Dropdown overlay={<Menu items={items} />} trigger={["click"]}>
                        <Button className='border-0'>Language <DownOutlined /></Button>
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
