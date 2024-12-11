'use client'
import type { Metadata } from "next";
import "./globals.css";
import { Layout, Menu, MenuProps } from "antd";
import { Content } from "antd/es/layout/layout";
import Sidebar from '../app/_components/sidebar/page'
import Header from './_components/header/page'
import { useRouter } from "next/router";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: "Admin Panel",
//   description: "Just admin panel",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const router = useRouter();

  // // Define routes that don't require the layout
  // const noLayoutRoutes = ["/login", "/signup"];

  // // If the current route is in the no-layout list, render children directly
  // if (noLayoutRoutes.includes(router.pathname)) {
  //   return children;
  // }

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
      setCollapsed(!collapsed)
      console.log(collapsed)
  };

  return (
    <html lang="en">
      <body>
        <Layout className="w-full h-full absolute">
          <Sidebar collapsed={collapsed} toggleCollapsed={toggleCollapsed}/>
          <Layout className="bg-white">
            <Header collapsed={collapsed} toggleCollapsed={toggleCollapsed}/>
            <Content className={`h-screen top-20 right-0 ${collapsed ? 'w-11/12' : 'w-4/5'} transition-all absolute p-5 bg-white`}>
              {children}
            </Content>
          </Layout>
        </Layout>
      </body>
    </html>
  );
}
