import React from 'react'
import CustomBtn from '../button/page'
import { PlusOutlined } from '@ant-design/icons'

export default function page(props: { header: any }) {
    return (
        <h1 className="text-3xl font-semibold">{props.header}</h1>
    )
}
