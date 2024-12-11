import React from 'react'
import Layout from '../../../_components/loginLayout/page'
import { Input } from 'antd'
import Link from 'next/link'
import CustomBtn from '../../../_components/button/page'
import Capcha from '../../../../assets/Frame 15.png'
import Image from 'next/image'

export default function page() {
    return (
        <Layout>
            <h1 className='text-3xl font-bold mb-10'>Güvənlik kodu</h1>
            <div>
                <Image src={Capcha} alt='capcha code' />
            </div>
            <Input type='text' placeholder='Mətni bura daxil edin' size='large' />
            {/* to show error set property status='error' in input */}
            <div className='mt-10 w-full'>
                <CustomBtn name='Qeydiyyatdan keçin' color='bg-gray-400' />
            </div>
        </Layout>
    )
}
