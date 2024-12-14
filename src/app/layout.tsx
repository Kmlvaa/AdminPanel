'use client';
import "./globals.css";
import { Layout, Menu } from "antd";
import { Content } from "antd/es/layout/layout";
import Sidebar from '../app/_components/sidebar/page';
import Header from './_components/header/page';
import { usePathname } from "next/navigation";
import { useState } from "react";
// import 'antd/dist/antd.css'; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const noLayoutRoutes = ["/login",
    "/registerAll",
    "/registerTeacher",
    "/registerStudent",
    "/capcha"
  ];

  const pathname = usePathname();

  if (noLayoutRoutes.includes(pathname)) {
    return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    );
  }

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <html lang="en">
      <body>
        <Layout className="w-full h-full absolute">
          <Sidebar collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
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
