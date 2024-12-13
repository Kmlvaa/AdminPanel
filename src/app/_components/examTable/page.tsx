'use client'
import { Table } from 'antd'
import { usePathname, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'

export default function page() {

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [current, setCurrent] = useState(Number(searchParams.get('page')) || 1);
    const [pageSize, setPageSize] = useState(Number(searchParams.get('pageSize')) || 5);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Ixtisas',
            dataIndex: 'ixtisas',
        },
        {
            title: 'Date',
            dataIndex: 'date',
        },
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            ixtisas: 'Our Bachelor of Commerce program is ACBSP-accredited.',
            date: '8:38 AM',
        },
        {
            key: '2',
            name: 'Jim Green',
            ixtisas: 'Our Bachelor of Commerce program is ACBSP-accredited.',
            date: '8:38 AM',
        },
        {
            key: '3',
            name: 'Joe Black',
            ixtisas: 'Our Bachelor of Commerce program is ACBSP-accredited.',
            date: '8:38 AM',
        },
        {
            key: '4',
            name: 'Disabled User',
            ixtisas: 'Our Bachelor of Commerce program is ACBSP-accredited.',
            date: '8:38 AM',
        },
        {
            key: '5',
            name: 'John Brown',
            ixtisas: 'Our Bachelor of Commerce program is ACBSP-accredited.',
            date: '8:38 AM',
        },
        {
            key: '6',
            name: 'Jim Green',
            ixtisas: 'Our Bachelor of Commerce program is ACBSP-accredited.',
            date: '8:38 AM',
        },
        {
            key: '7',
            name: 'Joe Black',
            ixtisas: 'Our Bachelor of Commerce program is ACBSP-accredited.',
            date: '8:38 AM',
        },
        {
            key: '8',
            name: 'Disabled User',
            ixtisas: 'Our Bachelor of Commerce program is ACBSP-accredited.',
            date: '8:38 AM',
        },
        {
            key: '9',
            name: 'John Brown',
            ixtisas: 'Our Bachelor of Commerce program is ACBSP-accredited.',
            date: '8:38 AM',
        },
        {
            key: '10',
            name: 'Jim Green',
            ixtisas: 'Our Bachelor of Commerce program is ACBSP-accredited.',
            date: '8:38 AM',
        },
        {
            key: '11',
            name: 'Joe Black',
            ixtisas: 'Our Bachelor of Commerce program is ACBSP-accredited.',
            date: '8:38 AM',
        },
        {
            key: '12',
            name: 'Disabled User',
            ixtisas: 'Our Bachelor of Commerce program is ACBSP-accredited.',
            date: '8:38 AM',
        },
    ];

    const rowSelection = {
        selectedRowKeys,
        onChange: (newSelectedRowKeys: any) => {
            setSelectedRowKeys(newSelectedRowKeys);
        },
    };

    const paginationConfig = {
        current: current,
        pageSize: pageSize,
        total: data.length,
        showSizeChanger: true,
        pageSizeOptions: ['3', '5', '10'],
        onChange: (page: number, pageSize: number) => {
            const updateParams = new URLSearchParams(searchParams);
            updateParams.set('page', page.toString());
            updateParams.set('pageSize', pageSize.toString());

            window.history.pushState(
                {},
                '',
                `${pathname}?${updateParams.toString()}`
            );

            setCurrent(page)
            setPageSize(pageSize)
        },
    };

    return (
        <Table dataSource={data} columns={columns} rowSelection={rowSelection} pagination={paginationConfig} />
    )
}
