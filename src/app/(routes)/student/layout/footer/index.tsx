import React from 'react'
import Logo from '../../../../../../public/assets/mobile logo.svg'
import Image from 'next/image'
import insta from '../../../../../../public/assets/uil_instagram-alt.svg'
import facebook from '../../../../../../public/assets/ri_facebook-fill.svg'
import twitter from '../../../../../../public/assets//mdi_twitter.svg'
import youtube from '../../../../../../public/assets/mdi_youtube.svg'
import { Divider } from 'antd'
import { RightOutlined } from '@ant-design/icons'

export default function index() {
    return (
        <footer className='px-20 py-10 flex flex-col justify-between gap-16'>
            <div className='w-full flex flex-row items-start justify-between gap-16'>
                <div className='w-1/3 flex flex-col items-start gap-6'>
                    <div>
                        <h2 className='text-2xl font-semibold'>X academy</h2>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, eaque alias! Alias, suscipit libero laborum, numquam tempora quasi eveniet iste doloremque nemo, mollitia soluta molestiae tempore saepe omnis cumque veniam?</p>
                    </div>
                    <div className='flex flex-row items-center gap-10'>
                        <Image src={facebook} alt='facebook link' className='cursor-pointer' />
                        <Image src={insta} alt='instagram link' className='cursor-pointer' />
                        <Image src={twitter} alt='twitter link' className='cursor-pointer' />
                        <Image src={youtube} alt='youtube link' className='cursor-pointer' />
                    </div>
                </div>
                <div className='w-1/3 flex flex-col gap-3'>
                    <h2 className='text-2xl font-semibold'>Header text</h2>
                    <div className='w-10 h-[1.5px] bg-black'></div>
                    <ul className='flex flex-col gap-2'>
                        <li><RightOutlined /> Item 1</li>
                        <li><RightOutlined /> Item 2</li>
                        <li><RightOutlined /> Item 3</li>
                        <li><RightOutlined /> Item 4</li>
                    </ul>
                </div>
            </div>
            <div className='w-full flex flex-row items-center justify-between gap-6'>
                <div className='w-1/3'>
                    <Image src={Logo} alt='X academy logo' />
                </div>
                <div className='w-1/3'>
                    <p>© 2023 <span className='font-semibold'>Lorem Ipsum.</span> All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}
