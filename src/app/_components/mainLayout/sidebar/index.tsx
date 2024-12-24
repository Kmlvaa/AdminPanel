'use client'
import { Menu, MenuProps } from 'antd';
import Sider from 'antd/es/layout/Sider';
import Image from 'next/image';
import { LogoutOutlined } from '@ant-design/icons';
import xLogo from '../../../../../public/assets/xAcademyLogo.svg'
import collapsedLogo from '../../../../../public/assets/Union.svg'
import { usePathname, useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

type MenuItemType = {
    key: number;
    icon: ReactNode;
    label: string;
    link?: string;
    children?: MenuItemType[];
};

export default function index(props: { collapsed: any; toggleCollapsed: any; items: MenuItemType[] }) {

    const [key, setKey] = useState('1')
    const router = useRouter();
    const pathname = usePathname();

    const onClick: MenuProps['onClick'] = (e) => {
        const item = props.items.find(x => x.key == Number(e.key));

        if (item) {
            const link = item.link
            router.push(`http://localhost:3000//${link}`)
        }
    };

    useEffect(() => {
        const key = props.items.find(x => x.link == pathname)?.key
        setKey(String(key))
        if (pathname == '/dashboard/accountSettings/security' || pathname == '/accountSettings/security') {
            setKey('6')
        }
        if (pathname == '/settings/exam' || pathname == '/settings/payment') {
            setKey('7')
        }
    }, [pathname, props.items])

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
                <Menu mode="inline" items={props.items} className="!border-0 pt-5 flex flex-col gap-3" selectedKeys={[`${key}`]} inlineCollapsed={props.collapsed} onClick={onClick} />
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
