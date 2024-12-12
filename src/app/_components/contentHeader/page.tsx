import React from 'react'
import CustomBtn from '../button/page'
import { PlusOutlined } from '@ant-design/icons'

export default function page(props: { header: any}) {
    return (
        <div className="flex flex-row items-center justify-between">
            <div>
                <h1 className="text-2xl font-bold">{props.header}</h1>
            </div>
            <div>
                <CustomBtn name=' Yeni imtahan yarat' color='bg-blue-500' prefix={<PlusOutlined />} />
            </div>
        </div>
    )
}
