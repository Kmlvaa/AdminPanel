import Image from 'next/image'
import React from 'react'
import Logo from '../../../../../../public/assets/mobile logo.svg'
import CustomBtn from '../../../../_components/button/index'

export default function index() {
  return (
    <div className='py-5 flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center gap-3'>
            <Image src={Logo} alt='logo'/>
            <input placeholder='search' className='p-2 '/>
        </div>
        <div className='flex flex-row items-center gap-10'>
          <div>
            <ul className='flex flex-row items-center gap-5'>
              <li>Imtahanlar</li>
              <li>Biz kimik?</li>
              <li>FAQ</li>
              <li>Eng</li>
            </ul>
          </div>
          <div className='flex flex-row items-center gap-3'>
            <CustomBtn name='Daxil ol' color='!text-blue-500 border-0 font-semibold hover:border-[1px]'/>
            <CustomBtn name='Qeydiyyatdan keç' color='bg-blue-500'/>
          </div>
        </div>
    </div>
  )
}
