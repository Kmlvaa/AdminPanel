import { Button } from 'antd'
import React from 'react'

export default function page(props) {
  return (
    <Button  className={`p-2 rounded-md ${props.color} text-white w-full px-3`}
    icon={props.prefix}>{props.name}</Button>
  )
}
