'use client'
import { Table, Tag } from 'antd'
import { useParams, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'
import Layout from '../../../_components/mainLayout/layout'

export default function page() {

    const pathname = useParams();
    const searchParams = useSearchParams();

    const [current, setCurrent] = useState(Number(searchParams.get('page')) || 1);
    const [pageSize, setPageSize] = useState(Number(searchParams.get('pageSize')) || 5);

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
        <Layout>
            <div>
                <Table dataSource={data} columns={columns} pagination={paginationConfig}
                    className='border-[1px] border-solid border-gray-200 rounded-xl p-5' />
            </div>
        </Layout>
    )
}

const columns = [
    {
        title: 'Tələbənin adı',
        dataIndex: 'fullname',
        key: 'fullname',
    },
    {
        title: 'Imtahan adı',
        dataIndex: 'exam',
        key: 'exam',
    },
    {
        title: 'Ödəniş tarixi',
        dataIndex: 'paymentDate',
        key: 'paymentDate',
    },
    {
        title: 'Ödəniş məbləği',
        dataIndex: 'amount',
        key: 'amount',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (text: any) => <Tag className={`py-1 px-4 font-bold border-0 w-24 text-center ${text == 'Success' ? 'text-[#00B69B] bg-green-100' : 'text-[#F5222D] bg-red-100'}`}>{text}</Tag>
    },
]

const data = [
    {
        id: 1,
        fullname: 'Ad soyad',
        exam: 'Backend programlasdirma',
        paymentDate: '10.10.2024',
        amount: 30,
        status: 'Success'
    },
    {
        id: 2,
        fullname: 'Ad soyad',
        exam: 'Backend programlasdirma',
        paymentDate: '10.10.2024',
        amount: 30,
        status: 'Success'
    },
    {
        id: 3,
        fullname: 'Ad soyad',
        exam: 'Backend programlasdirma',
        paymentDate: '10.10.2024',
        amount: 30,
        status: 'Rejected'
    },
    {
        id: 4,
        fullname: 'Ad soyad',
        exam: 'Backend programlasdirma',
        paymentDate: '10.10.2024',
        amount: 30,
        status: 'Success'
    },
]