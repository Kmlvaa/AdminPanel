import React from 'react'
import CustomBtn from '../../button'
import { PlusOutlined } from '@ant-design/icons'

export default function index(props: { header: any }) {
    return (
        <h1 className="text-3xl font-semibold mb-5">{props.header}</h1>
    )
}
