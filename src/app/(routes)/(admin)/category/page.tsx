'use client'
import { Button } from 'antd'
import Image from 'next/image';
import React, { useState } from 'react'
import Layout from '../../../_components/mainLayout/layout'


export default function page() {

  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setExpandedCategory((prev) => prev === id ? null : id)
  }

  return (
    <Layout>
      <div>
        {categories?.map((category) => {
          return (
            <div key={category.id}>
              <div key={category.id} className='flex flex-row items-center justify-between border-[1px] border-gray-300 hover:bg-[#F5F6FA]  p-7 rounded-lg my-2'>
                <div>
                  <p>{category.title}</p>
                </div>
                <div>
                  <Button onClick={() => { handleClick(category.id) }}
                    data-id={category.id}
                    className='rounded-full px-6 text-[#718EBF] border-[#718EBF] hover:text-[#1814F3] hover:border-[#1814F3]'>View details</Button>
                </div>
              </div>
              <div className='px-14'>
                {category.children.map((child) => {
                  return (
                    <div key={child.id} className={`${expandedCategory == child.categoryId ? 'flex' : 'hidden'} flex-row items-center justify-between border-[1px] border-gray-300 hover:bg-[#F5F6FA] p-3 rounded-lg my-2`}>
                      <div className='flex flex-row items-center gap-5'>
                        <Image alt='image' src={child.imageUrl} width={50} height={50} />
                        <div>
                          <h1>{child.name}</h1>
                          <p>Lorem Ipsum</p>
                        </div>
                      </div>
                      <div className='flex flex-row items-center gap-10'>
                        <p>{child.date}</p>
                        <button className='text-blue-600 hover:underline'>Gözdən keçir</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  )
}

const categories = [
  {
    id: 1,
    title: 'Proqramlasdirma',
    children: [
      {
        id: 100,
        name: 'Frontend Programlasdirma',
        imageUrl: '/assets/cardImage1.svg',
        date: '10.10.2024',
        categoryId: 1
      },
      {
        id: 101,
        name: 'Backend Programlasdirma',
        imageUrl: '/assets/cardImage2.svg',
        date: '10.10.2024',
        categoryId: 1
      },
      {
        id: 102,
        name: 'C# programlasdirma',
        imageUrl: '/assets/cardImage3.svg',
        date: '10.10.2024',
        categoryId: 1
      },
      {
        id: 103,
        name: 'Mobile Development',
        imageUrl: '/assets/cardImage1.svg',
        date: '10.10.2024',
        categoryId: 1
      },
    ]
  },
  {
    id: 2,
    title: 'Proqramlasdirma',
    children: [
      {
        id: 100,
        name: 'Frontend Programlasdirma',
        imageUrl: '/assets/cardImage1.svg',
        date: '10.10.2024',
        categoryId: 2
      },
    ]
  },
  {
    id: 3,
    title: 'Proqramlasdirma',
    children: [
      {
        id: 100,
        name: 'Frontend Programlasdirma',
        imageUrl: '/assets/cardImage1.svg',
        date: '10.10.2024',
        categoryId: 3
      },
      {
        id: 101,
        name: 'Backend Programlasdirma',
        imageUrl: '/assets/cardImage2.svg',
        date: '10.10.2024',
        categoryId: 3
      },
    ]
  },
]
