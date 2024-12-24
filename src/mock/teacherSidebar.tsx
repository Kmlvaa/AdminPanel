import { HomeOutlined, FormOutlined, BellOutlined, CreditCardOutlined, UserOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { ReactNode } from 'react';

type MenuItemType = {
    key: number;
    icon: ReactNode;
    label: string;
    link: string;
};

export const items: MenuItemType[] = [
    {
        key: 1, icon: <HomeOutlined />, label: 'Dashboard', link: '/dashboard',
    },
    {
        key: 2, icon: <FormOutlined />, label: 'Imtahanlar', link: '/dashboard/exam',
    },
    {
        key: 3, icon: <BellOutlined />, label: 'Bildirişlər', link: '/dashboard/notifications'
    },
    {
        key: 4, icon: <UsergroupAddOutlined />, label: 'Tələbələr', link: '/dashboard/students'
    },
    {
        key: 5, icon: <CreditCardOutlined />, label: 'Ödənişlər', link: '/dashboard/payment'
    },
    {
        key: 6, icon: <UserOutlined />, label: 'Hesab', link: '/dashboard/accountSettings/editProfile',
    },
];

export default items