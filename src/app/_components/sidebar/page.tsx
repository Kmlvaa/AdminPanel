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
import { redirect } from 'next/navigation';

export default function page(props: { collapsed: any; toggleCollapsed: React.MouseEventHandler<HTMLElement> | undefined }) {

    const items = [
        { key: 1, icon: <HomeOutlined />, label: 'Dashboard', link: '/' },
        { key: 2, icon: <FormOutlined />, label: 'Imtahanlar', link: '/pages/exam' },
        { key: 3, icon: <BellOutlined />, label: 'Bildirişlər', link: '/' },
        { key: 4, icon: <AppstoreOutlined />, label: 'Kateqoriyalar', link: '/' },
        { key: 5, icon: <CreditCardOutlined />, label: 'Ödənişlər', link: '/' },
        { key: 6, icon: <UserOutlined />, label: 'Hesab', link: '/' },
        { key: 7, icon: <SettingOutlined />, label: 'Ayarlar', link: '/' },
    ]
    const onClick: MenuProps['onClick'] = (e) => {
        const item = items.find(x => x.key == Number(e.key))
        console.log(item)
        redirect(item.link)
      };
    return (
        <>
            <Sider
                width='20%'
                collapsedWidth='8%'
                collapsed={props.collapsed}
                className="text-black bg-white fixed top-0 bottom-0 z-10 h-full p-5"
            >
                <div className={` ${props.collapsed ? 'flex items-center justify-center' : 'px-5'}`}>
                    <Image src={props.collapsed ? collapsedLogo : logo} className={`w-auto h-auto ${props.collapsed ? 'ease-in' : 'ease-in'}`} alt="logo" />
                </div>
                <Menu mode="inline" items={items} className="!border-0 pt-5 flex flex-col gap-3" defaultSelectedKeys={['1']} inlineCollapsed={props.collapsed} onClick={onClick} />
                <div className="absolute bottom-0 mx-5 my-10">
                    <button>
                        <LogoutOutlined /> <span className={`${props.collapsed ? 'hidden' : ''}`}>Hesabdan çıxış</span>
                    </button>
                </div>
            </Sider>
        </>
    )
}
