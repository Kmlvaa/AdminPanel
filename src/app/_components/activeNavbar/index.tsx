import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function index(props: any) {

    const pathname = usePathname();
    const isActive = (path: any) => pathname === path;

    return (
        <div className={`${isActive(`${props.url}`) ? 'border-b-2 border-[#1677FF]' : ''}`}>
            <Link href={props.url} className={`hover:text-blue-300 cursor-pointer ${isActive(`${props.url}`) ? 'text-[#1677FF]' : 'text-[#878787]'}`}>{props.title}</Link>
        </div>
    )
}
