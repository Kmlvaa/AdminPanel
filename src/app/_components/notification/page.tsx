import { CloseCircleOutlined, CloseOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'

export default function page() {
  return (
    <div className='flex flex-row items-center justify-between border-[1px] border-gray-300 bg-[#F5F6FA] p-7 rounded-lg my-2'>
        <div>
            <p>Meeting with CEO</p>
        </div>
        <div>
            <Button danger shape='circle' icon={<CloseOutlined />}></Button>
        </div>
    </div>
  )
}
