import { HomeOutlined, FormOutlined, BellOutlined, AppstoreAddOutlined, CreditCardOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import { ReactNode } from 'react';

type MenuItemType = {
    key: number;
    icon: ReactNode;
    label: string;
    link: string;
};

export const items: MenuItemType[] = [
    { key: 1, icon: <HomeOutlined />, label: 'Dashboard', link: '/', },
    { key: 2, icon: <FormOutlined />, label: 'Imtahanlar', link: '/exam', },
    { key: 3, icon: <BellOutlined />, label: 'Bildirişlər', link: '/notifications' },
    { key: 4, icon: <AppstoreAddOutlined />, label: 'Kateqoriyalar', link: '/category' },
    { key: 5, icon: <CreditCardOutlined />, label: 'Ödənişlər', link: '/payment' },
    { key: 6, icon: <UserOutlined />, label: 'Hesab', link: '/accountSettings/editProfile', },
    { key: 7, icon: <SettingOutlined />, label: 'Ayarlar', link: '/settings/general', },
];

export default items