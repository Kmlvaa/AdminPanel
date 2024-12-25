'use client';
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Sidebar from '../../_components/mainLayout/sidebar';
import Header from '../../_components/mainLayout/header';
import { usePathname } from "next/navigation";
import { useState } from "react";
import adminSidebar from '../../../mock/adminSidebar'
import teacherSidebar from '../../../mock/teacherSidebar'

export default function RootLayout({
    children
    , title = "Admin panel"
}: {
    children: React.ReactNode;
    title?: string;
}) {

    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const pathname = usePathname();
    let items = []

    if (pathname.includes('/dashboard')) {
        items = teacherSidebar
    }
    else {
        items = adminSidebar
    }

    return (
        <html lang="en">
            <title>{title}</title>
            <meta name="description" content='admin panel' />
            <body>
                <Layout className="w-full h-full absolute">
                    <Sidebar collapsed={collapsed} toggleCollapsed={toggleCollapsed} items={items} />
                    <Layout className="bg-white">
                        <Header collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
                        <Content
                            className={`h-screen top-20 right-0 ${collapsed ? 'left-[100px]' : 'left-[250px]'
                                } transition-all absolute py-5 px-14 bg-white pr-20`}>
                            {children}
                        </Content>
                    </Layout>
                </Layout>
            </body>
        </html>
    );
}
