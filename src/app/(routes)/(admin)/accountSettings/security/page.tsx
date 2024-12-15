import React from 'react'
import Layout from '../(layout)/page'
import { Form, Input } from 'antd'
import Button from '../../../../_components/button/index'

export default function page() {
  return (
    <Layout>
      <Form>
        <div className='flex flex-col items-start w-full gap-5 my-10'>
          <h1 className='font-semibold text-lg'>Şifrəni dəyiş</h1>
          <div className='flex !flex-col items-start gap-2 w-1/2'>
            <label className='text-gray-800'>İndiki şifrə</label>
            <Input type='password' placeholder='Şifrə daxil edin' size='large' className='w-full' name='email' />
          </div>
          <div className='flex !flex-col items-start gap-2 w-1/2'>
            <label className='text-gray-800'>Yeni şifrə</label>
            <Input type='password' placeholder='Şifrə daxil edin' size='large' className='w-full' name='email' />
          </div>
        </div>
        <div className='relative w-full h-full mt-40'>
          <div className='absolute right-7 bottom-0 w-[200px]'>
            <Button color='bg-blue-500' name='Yadda saxla' />
          </div>
        </div>
      </Form>
    </Layout>
  )
}
