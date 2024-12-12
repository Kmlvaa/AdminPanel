'use client';
import "./globals.css";
import { Layout, Menu } from "antd";
import { Content } from "antd/es/layout/layout";
import Sidebar from '../app/_components/sidebar/page';
import Header from './_components/header/page';
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Define routes that don't require the layout
  const noLayoutRoutes = ["/pages/account/login",
    "/pages/account/register/all",
    "pages/account/register/teacher",
    "pages/account/register/student"
  ];

  const pathname = usePathname();

  // If the current route is in the no-layout list, render children directly
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
              className={`h-screen top-20 right-0 ${collapsed ? "w-11/12" : "w-4/5"
                } transition-all absolute p-5 bg-white pr-20`}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </body>
    </html>
  );
}
