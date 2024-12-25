'use client'
import React, { useState } from 'react'
import Layout from '../layout/layout'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import { Divider } from 'antd'
import Header from '../../../_components/mainLayout/contentHeader/index'
import directHit from '../../../../../public/assets/Direct Hit.svg'
import Image from 'next/image'

export default function page() {

    const [show, setShow] = useState<number | null>(null);

    const handleClick = (id: any) => {
        setShow((prev) => prev === id ? null : id)
    }
    return (
        <Layout>
            <div className='ExamPage w-full h-28 flex items-center px-20'>
                <p className='text-white font-semibold'>Home &gt;&gt; FAQ</p>
            </div>
            <div className='px-20'>
                <div className=' py-10'>
                    <Header header='FAQ' />
                </div>
                <ul>
                    {data?.map((item) => {
                        return (
                            <>
                                <li key={item.id} className='flex flex-row justify-between items-center py-10'>
                                    <p className='text-gray-600 font-semibold text-lg'>{item.title}</p>
                                    <div onClick={() => handleClick(item.id)} className='cursor-pointer'>
                                        {show == item.id ? <UpOutlined />
                                            : <DownOutlined />}
                                    </div>
                                </li>
                                <Divider />
                                {show == item.id ?
                                    <div className='flex flex-row place-items-start justify-start gap-4 ml-10 mt-5 mb-20 Transition'>
                                        <Image src={directHit} alt='direct hit image' />
                                        <p className='text-black font-semibold text-balance'>{item.about}</p>
                                    </div>
                                    : <></>}
                            </>
                        );
                    })}
                </ul>
            </div>
        </Layout>
    )
}

const data = [
    {
        id: 1,
        title: 'Akademik məsləhət',
        about: 'Kursumuzun karyera dəstəyi, tələbələrə iş dünyasına keçid prosesində bütünlüklə kömək etməyi hədəfləyir. Biz, iştirakçılarımızın fərdi bacarıqlarını və maraqlarını nəzərə alaraq, onlara uyğun peşə sahələri seçməkdə və inkişaf etdirməkdə dəstək veririk. Karyera dəstəyi çərçivəsində CV yazımı, müsahibə hazırlığı və iş axtarış strategiyaları kimi vacib məsələlərdə ətraflı məsləhətlər təqdim edirik. Eyni zamanda, mentorlarımız vasitəsilə şəbəkələşmə imkanları yaradaraq, tələbələrin iş mühitində tanınmalarını və əlaqələr qurmalarını təşviq edirik. Məqsədimiz, tələbələrin potensiallarını maksimum dərəcədə dəyərləndirərək, uğurlu bir karyera yolunda irəliləmələrinə dəstək olmaqdır.'
    },
    {
        id: 2,
        title: 'Praktik təcrübə',
        about: 'Kursumuzda praktik təcrübə proqramı, tələbələrin öyrəndikləri nəzəri bilikləri real iş mühitində tətbiq etmələrinə imkan tanıyır. Bu proqram çərçivəsində, iştirakçılar müxtəlif şirkətlərdə staj keçərək, sahələrinin tələblərinə uyğun praktik bacarıqlar əldə edirlər. Praktik təcrübə, tələbələrin iş yerində qarşılaşa biləcəkləri real vəziyyətlərlə tanış olmalarını, müasir texnologiyalarla işləmələrini və komandada effektiv şəkildə əməkdaşlıq etmələrini təmin edir. Eyni zamanda, bu proqram, tələbələrin şəbəkələşmə imkanlarını genişləndirmək və peşəkar əlaqələr qurmaq üçün əvəzsiz bir platformadır. Məqsədimiz, iştirakçılarımızın karyera yolunda daha güclü bir başlanğıc əldə etmələrinə kömək etməkdir.'
    },
    {
        id: 3,
        title: 'Mentorluq proqramı',
        about: 'Kursumuzda təqdim olunan mentorluq proqramı, tələbələrə peşəkar inkişaflarında yön vermək məqsədini güdür. Bu proqramda, təcrübəli mütəxəssislər və sənaye liderləri, tələbələrə fərdi mentorluq edərək, onların karyera hədəflərinə çatmalarına kömək edirlər. Mentorlarımız, tələbələrin maraqlarını və güclü tərəflərini nəzərə alaraq, onlara öz sahələrindəki ən son trendləri, iş mühitini və uğurlu karyera yollarını tanıtdırır. Eyni zamanda, proqram çərçivəsində şəbəkələşmə imkanları yaradaraq, tələbələrin müvafiq sektorda tanınmalarına və əhəmiyyətli əlaqələr qurmağına dəstək oluruq. Məqsədimiz, iştirakçılarımızın öz potensiallarını inkişaf etdirmək və karyeralarında uğur qazanmaq üçün güclü bir zəmin hazırlamaqdır.'
    },
    {
        id: 4,
        title: 'Şəxsi inkişaf',
        about: 'Kursumuzda şəxs inkişaf proqramı, tələbələrin yalnız peşəkar bacarıqlarını deyil, eyni zamanda şəxsi potensialını artırmalarına yönəlmişdir. Bu proqram, fərdi güclü tərəflərin aşkar olunması, özünütanıma, məqsəd qoyma və zaman idarəetməsi kimi vacib sahələri əhatə edir. Tələbələr, fərdi inkişaf seminarları, təlimlər və praktiki məşğələlər vasitəsilə özlərini daha yaxşı tanıma və güclü tərəflərini inkişaf etdirmə imkanı əldə edirlər. Şəxsi inkişaf proqramı, eyni zamanda, streslə mübarizə, kommunikasiya bacarıqları və liderlik keyfiyyətlərinin artırılması kimi aspektləri də əhatə edir. Məqsədimiz, iştirakçılarımızın özünəinamını artıraraq, həm iş mühitində, həm də şəxsi həyatlarında uğurlu bir şəkildə irəliləmələrini təmin etməkdir.'
    },
]