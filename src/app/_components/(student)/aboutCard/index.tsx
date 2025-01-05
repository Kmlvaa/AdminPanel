import React from 'react'

export default function index(props: any) {
  return (
    <div className='bg-wave bg-blue-gradient w-80 h-52 p-10 text-white text-4xl rounded-lg flex flex-col items-center justify-center box-shadow: 4px 8px 40px 0px rgba(0,0,64,1) inset;'>
        <p>{props.count}</p>
        <p>{props.title}</p>
    </div>
  )
}
