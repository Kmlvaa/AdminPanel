import React from 'react'
import Header from '../../_components/contentHeader/page'
import { DownOutlined, FilterOutlined, ReloadOutlined } from '@ant-design/icons'
import { Button, Dropdown, Menu, MenuItemProps, MenuProps, Space, Table, TableColumnsType, TableProps } from 'antd'

export default function page() {

    const tarix: MenuProps['items'] = [
        { key: 1, label: '10.10.2020' },
        { key: 2, label: '24.02.2020' },
    ]
    const level: MenuProps['items'] = [
        { key: 1, label: 'Easy' },
        { key: 2, label: 'Medium' },
        { key: 3, label: 'hard' },
    ]
    const ixtisas: MenuProps['items'] = [
        { key: 1, label: 'Eng' },
        { key: 2, label: 'Az' },
    ]

    interface DataType {
        key: React.Key;
        name: string;
        age: number;
        address: string;
    }

    const columns: TableColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
    ];

    const data: DataType[] = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
        },
        {
            key: '4',
            name: 'Disabled User',
            age: 99,
            address: 'Sydney No. 1 Lake Park',
        },
    ];

    // rowSelection object indicates the need for row selection
    const rowSelection: TableProps<DataType>['rowSelection'] = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
    };

    return (
        <div className='flex flex-col gap-5'>
            <Header header='Imtahanlar' />
            <div className='flex flex-row items-center justify-between w-2/3 py-2 px-5 border-[1px] border-gray-300 rounded-lg font-semibold'>
                <FilterOutlined />
                <p>Filtrlə</p>
                <Dropdown overlay={<Menu items={tarix} />} trigger={["click"]}>
                    <Button className='border-0 font-semibold'>Tarix <DownOutlined /></Button>
                </Dropdown>
                <Dropdown overlay={<Menu items={ixtisas} />} trigger={["click"]}>
                    <Button className='border-0 font-semibold'>Ixtisas <DownOutlined /></Button>
                </Dropdown>
                <Dropdown overlay={<Menu items={level} />} trigger={["click"]}>
                    <Button className='border-0 font-semibold'>Çətinlik dərəcəsi <DownOutlined /></Button>
                </Dropdown>
                <p className='text-red-500 font-semibold'><ReloadOutlined /> Reset filter</p>
            </div>
            <div>
                <Table<DataType> dataSource={data} />
            </div>
        </div>
    )
}
