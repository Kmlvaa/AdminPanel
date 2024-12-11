import React from 'react'

export default function page({ children }: { children: React.ReactNode }) {
  return (
    <div className='accountLayout w-screen h-screen'>
      {children}
    </div>
  )
}
