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
import xLogo from '../../../../public/assets/xAcademyLogo.svg'
import collapsedLogo from '../../../../public/assets/Union.svg'
import { useRouter } from 'next/navigation';

export default function page(props: { collapsed: any; toggleCollapsed: any }) {

    const items = [
        { key: 1, icon: <HomeOutlined />, label: 'Dashboard', link: '/' },
        { key: 2, icon: <FormOutlined />, label: 'Imtahanlar', link: '/pages/admin/exam' },
        { key: 3, icon: <BellOutlined />, label: 'Bildirişlər', link: '/pages/admin/notifications' },
        { key: 4, icon: <AppstoreOutlined />, label: 'Kateqoriyalar', link: '/' },
        { key: 5, icon: <CreditCardOutlined />, label: 'Ödənişlər', link: '/' },
        { key: 6, icon: <UserOutlined />, label: 'Hesab', link: '/' },
        { key: 7, icon: <SettingOutlined />, label: 'Ayarlar', link: '/' },
    ]

    const router = useRouter();

    const onClick: MenuProps['onClick'] = (e) => {
        const item = items.find(x => x.key == Number(e.key))
        console.log(item)
        router.push(`http://localhost:3000//${item?.link}`)
    };
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
                <Menu mode="inline" items={items} className="!border-0 pt-5 flex flex-col gap-3" defaultSelectedKeys={['1']} inlineCollapsed={props.collapsed} onClick={onClick} />
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
