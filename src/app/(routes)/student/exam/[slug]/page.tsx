import Layout from '../../layout/layout'
import Header from '../../../../_components/mainLayout/contentHeader/index'
import { Button, Progress } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import Questions from '../../../../_components/(student)/exam/index'
import ProgressBar from '../../../../_components/(student)/progressBar/index'

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug

    const exam = data.find(x => x.id == parseInt(slug))

    return (
        <Layout>
            <div className='ExamPage w-full h-28 flex items-center px-20'>
                <p className='text-white font-semibold'>Home &gt;&gt; Imtahanlar &gt;&gt; {exam?.title}</p>
            </div>
            <div className='px-20 py-5'>
                <div className='flex flex-row items-center justify-between border-[1px] border-red-600 font-semibold bg-white text-red-600 p-7 rounded-xl my-2'>
                    <div>
                        <p>Test zamanı kompüter ekranınızı telefon kamerası ilə qeyd etməlisiniz. </p>
                    </div>
                    <div>
                        <Button danger shape='circle' icon={<CloseOutlined />}></Button>
                    </div>
                </div>
            </div>
            <div className='py-10 px-20'>
                <div className='flex flex-row items-center justify-between'>
                    <Header header={exam?.title} />
                </div>
                <div className='w-full flex flex-row items-start justify-between gap-5'>
                    <div className='w-3/4 flex flex-col items-center gap-5'>
                        <div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate perferendis sapiente, voluptates nihil quia vero
                                itaque minima consectetur dicta! Voluptatum officiis asperiores nostrum natus odit, voluptate ab eius quaerat.</p>
                        </div>
                        <div className='border-[1px] border-[#878787] rounded-xl w-full h-auto px-5 py-5'>
                            <Questions />
                        </div>
                    </div>
                    <ProgressBar />
                </div>
            </div>
        </Layout>
    );
}

const data = [
    {
        id: 1,
        title: 'Frontend programlasdirma',
        amount: '24.99',
        date: '10.12.2024',
        fullname: 'Aqil Quliyev',
        image: '/assets/card1.svg'
    },
    {
        id: 2,
        title: 'Backend programlasdirma',
        amount: '24.99',
        date: '10.12.2024',
        fullname: 'Aqil Quliyev',
        image: '/assets/card2.svg'
    },
    {
        id: 3,
        title: 'Backend programlasdirma',
        amount: '24.99',
        date: '10.12.2024',
        fullname: 'Aqil Quliyev',
        image: '/assets/card3.svg'
    },
]
