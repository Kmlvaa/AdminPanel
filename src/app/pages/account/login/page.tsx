'use client'
import React, { useState } from 'react'
import Layout from '../../../_components/AccountLayout/page'
import { Checkbox, Form, Input, Space } from 'antd'
import CustomBtn from '../../../_components/button/page'
import Link from 'next/link'

export default function page() {

  const values = {
    email: 'admin@gmail.com',
    password: 'admin123',
    rememberPassword: false
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = () => {
    console.log(email,password)
  }

  return (
    <Layout>
      <div className='w-full h-full flex items-center justify-center'>
        <Form className='w-2/5 max-lg:w-1/2 max-md:w-3/4 m-auto h-auto py-16 px-12 bg-white rounded-2xl text-center flex flex-col gap-5'>
          <h1 className='text-3xl font-bold mb-10'>Hesaba daxil ol</h1>
          <div className='flex !flex-col items-start gap-2'>
            <label className='text-gray-800'>Email address</label>
            <Input placeholder='Email daxil edin' size='large' className='Input-field' name='email' onChange={(e) => {setEmail(e.target.value)}} style={{ backgroundColor: '#F5F6FA' }}/>
          </div>
          <div className='flex !flex-col gap-2'>
            <div className='flex flex-row justify-between items-center'>
              <label className='text-gray-800'>Password</label>
              <p className='text-gray-500 cursor-pointer hover:text-blue-700'>Şifrəmi unutdum</p>
            </div>
            <Input.Password placeholder='Password daxil edin' size='large' className='Input-field' name='password' onChange={(e) => {setPassword(e.target.value)}} style={{ backgroundColor: '#F5F6FA' }}/>
            {/* to show error set property status='error' in input */}
            <Checkbox name='rememberPassword'>Remember Password</Checkbox>
          </div>
          <div className='mt-10 w-4/5 m-auto'>
            <CustomBtn name='Daxil ol'/>
            <p>Hesabın yoxdur? <Link href='/pages/account/register' className='text-blue-500 font-semibold underline cursor-pointer'>Hesab yarat</Link></p>
          </div>
        </Form>
      </div>
    </Layout>
  )
}
