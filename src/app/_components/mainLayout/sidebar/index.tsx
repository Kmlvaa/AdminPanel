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
import xLogo from '../../../../../public/assets/xAcademyLogo.svg'
import collapsedLogo from '../../../../../public/assets/Union.svg'
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function index(props: { collapsed: any; toggleCollapsed: any }) {

    const [key, setKey] = useState('1')

    const router = useRouter();
    const pathname = usePathname();

    const items = [
        { key: 1, icon: <HomeOutlined />, label: 'Dashboard', link: '/' },
        { key: 2, icon: <FormOutlined />, label: 'Imtahanlar', link: '/exam' },
        { key: 3, icon: <BellOutlined />, label: 'Bildirişlər', link: '/notifications' },
        { key: 4, icon: <AppstoreOutlined />, label: 'Kateqoriyalar', link: '/category' },
        { key: 5, icon: <CreditCardOutlined />, label: 'Ödənişlər', link: '/payment' },
        { key: 6, icon: <UserOutlined />, label: 'Hesab', link: '/accountSettings/editProfile' },
        { key: 7, icon: <SettingOutlined />, label: 'Ayarlar', link: '/settings/general' },
    ]

    const onClick: MenuProps['onClick'] = (e) => {
        const itemLink = items.find(x => x.key == Number(e.key))?.link
        router.push(`http://localhost:3001//${itemLink}`)
    };

    useEffect(() => {
        const key = items.find(x => x.link == pathname)?.key
        setKey(String(key))
    }, [pathname, items])

    return (
        <>
            <Sider
                width='250px'
                collapsedWidth='100px'
                collapsed={props.collapsed}
                className="text-black bg-white fixed top-0 bottom-0 z-10 h-full p-5 shadow-md"
            >
                <div className='flex flex-row items-center gap-2 px-5'>
                    <Image src={collapsedLogo} className={`w-[50px] h-[50px] `} alt="logo" />
                    <Image src={xLogo} alt='logo' className={`${props.collapsed ? 'hidden' : ''}`} />
                </div>
                <Menu mode="inline" items={items} className="!border-0 pt-5 flex flex-col gap-3" selectedKeys={[`${key}`]} inlineCollapsed={props.collapsed} onClick={onClick} />
                <div className="absolute bottom-0 mx-8 my-10">
                    <button className='overflow-hidden'>
                        <LogoutOutlined />
                        <span className={`ml-2 transition-all duration-500 ease-in-out opacity-100 scale-100 ${props.collapsed ? 'hidden opacity-0 scale-85' : ''}`}>Hesabdan çıxış</span>
                    </button>
                </div>
            </Sider>
        </>
    )
}
