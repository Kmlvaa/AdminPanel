import React from 'react'

export default function page(props) {
  return (
    <button type='submit' className={`p-2 rounded-md ${props.color} text-white w-full`}>{props.name}</button>
  )
}
