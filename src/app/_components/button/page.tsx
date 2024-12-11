import React from 'react'

export default function page(props) {
  return (
    <button type='submit' className='p-2 rounded-md bg-blue-500 text-white w-full'>{props.name}</button>
  )
}
