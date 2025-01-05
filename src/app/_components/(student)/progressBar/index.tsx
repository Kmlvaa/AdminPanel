import { Progress } from 'antd'
import React, { useState } from 'react'

export default function index(props: any) {

    // const progressPercentage = ((props.currentQuestionIndex) / props.questions.length) * 100;

    // Separate format function
    const formatProgress = (percent: any) => {
        return `${percent}%`;
    };
    return (
        <div className='w-1/4 flex flex-col items-center justify-center gap-10'>
            <div className='flex flex-col items-center gap-3'>
                <h3 className='font-2xl font-semibold'>Sual sayı</h3>
                <Progress type='circle' percent={20} />
            </div>
            <div>
                <h3 className='font-2xl font-semibold'>Timer</h3>
                <Progress type='circle' percent={45} strokeColor={'#87d068'}/>
            </div>
        </div>
    )
}
