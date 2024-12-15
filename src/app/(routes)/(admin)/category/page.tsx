import { Button } from 'antd'
import React from 'react'

export default function page() {
  return (
    <div>
      {categories?.map((category) => {
        return (
          <div key={category.id} className='flex flex-row items-center justify-between border-[1px] border-gray-300 bg-[#F5F6FA] p-7 rounded-lg my-2'>
            <div>
              <p>{category.title}</p>
            </div>
            <div>
              <Button className='rounded-full px-6 text-[#718EBF] border-[#718EBF] hover:text-[#1814F3] hover:border-[#1814F3]'>View details</Button>
            </div>
          </div>
        );
      })}
    </div>
  )
}

const categories = [
  {
    id: 1,
    title: 'Proqramlasdirma'
  },
  {
    id: 2,
    title: 'Proqramlasdirma'
  },
  {
    id: 3,
    title: 'Proqramlasdirma'
  },
]
