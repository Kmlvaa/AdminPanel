'use client'
import { Menu, MenuProps } from 'antd';
import Sider from 'antd/es/layout/Sider';
import Image from 'next/image';
import {
    AppstoreOutlined,
    BellOutlined,
    CreditCardOutlined,
    FormOutlined,
    HomeOutlined,
    LogoutOutlined,
    SettingOutlined,
    UserOutlined,
} from '@ant-design/icons';
import logo from '../../../assets/xlogo.svg'
import collapsedLogo from '../../../assets/Union.svg'

export default function page(props: { collapsed: any; toggleCollapsed: React.MouseEventHandler<HTMLElement> | undefined }) {

    const items: MenuProps['items'] = [
        { key: 1, icon: <HomeOutlined />, label: 'Dashboard' },
        { key: 2, icon: <FormOutlined />, label: 'Imtahanlar' },
        { key: 3, icon: <BellOutlined />, label: 'Bildirişlər' },
        { key: 4, icon: <AppstoreOutlined />, label: 'Kateqoriyalar' },
        { key: 5, icon: <CreditCardOutlined />, label: 'Ödənişlər' },
        { key: 6, icon: <UserOutlined />, label: 'Hesab' },
        { key: 7, icon: <SettingOutlined />, label: 'Ayarlar' },
    ]
    return (
        <>
            <Sider
                width='20%'
                collapsedWidth='10%'
                collapsed={props.collapsed}
                className="text-black bg-white fixed top-0 bottom-0 z-10 h-full p-5"
            >
                <Image src={props.collapsed ? collapsedLogo : logo} className='w-auto h-auto' alt="logo" />
                <Menu mode="inline" items={items} className="!border-0 pt-5 flex flex-col gap-3" defaultSelectedKeys={['1']} inlineCollapsed={props.collapsed} />
                <div className="absolute bottom-0 mx-5 my-10">
                    <button>
                        <LogoutOutlined /> <span className={`${props.collapsed ? 'hidden' : ''}`}>Hesabdan çıxış</span>
                    </button>
                </div>
            </Sider>
        </>
    )
}
