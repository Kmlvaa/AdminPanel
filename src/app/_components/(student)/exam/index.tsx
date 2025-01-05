'use client'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Button, Radio } from 'antd';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

export default function index() {

    // const count = useSelector((state) => state.pagination.currentQuestionIndex)


    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [value, setValue] = useState('initial')

    const nextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const prevQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleAnswerChange = (e: any) => {
        setAnswers({
            ...answers,
            [currentQuestionIndex]: e.target.value,
        });
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div>
            <div className='mb-8 text-lg font-semibold flex flex-row gap-2'>
                <span>{currentQuestion.id}.</span>
                <p>{currentQuestion.title}</p>
            </div>
            <div>
                <Radio.Group value={value} size='large' className='flex flex-col items-start gap-3 pl-5 mb-8'>
                    {currentQuestion.options.map((option) => {
                        return (
                            <Radio key={option.id} value={option.option} onClick={() => setValue(option.option)} onChange={handleAnswerChange}>{option.option}</Radio>
                        );
                    })}
                </Radio.Group>
            </div>
            <div className='flex flex-row items-center gap-2 float-right'>
                <Button className='bg-blue-600 text-white border-white hover:border-blue-600'
                    icon={<ArrowLeftOutlined />}
                    onClick={prevQuestion} disabled={currentQuestionIndex === 0}>
                    Əvvəlki
                </Button>
                <Button className='bg-blue-600 text-white border-white hover:border-blue-600'
                    onClick={nextQuestion} disabled={currentQuestionIndex === questions.length - 1}>
                    Növbəti <ArrowRightOutlined />
                </Button>
            </div>
        </div>
    )
}

const questions = [
    {
        id: 1,
        title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate perferendis sapiente, voluptates Consequatur voluptate perferendis sapiente, voluptates',
        options: [
            {
                id: 1,
                option: 'Option 1',
                isCorrect: true
            },
            {
                id: 2,
                option: 'Option 2',
                isCorrect: false
            },
            {
                id: 3,
                option: 'Option 3',
                isCorrect: false
            },
        ]
    },
    {
        id: 2,
        title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate perferendis sapiente, voluptates',
        options: [
            {
                id: 1,
                option: 'Option 10',
                isCorrect: true
            },
            {
                id: 2,
                option: 'Option 20',
                isCorrect: false
            },
            {
                id: 3,
                option: 'Option 30',
                isCorrect: false
            },
        ]
    },
    {
        id: 3,
        title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate perferendis sapiente, voluptates Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate perferendis sapiente, voluptates',
        options: [
            {
                id: 1,
                option: 'Option 10',
                isCorrect: true
            },
            {
                id: 2,
                option: 'Option 20',
                isCorrect: false
            },
            {
                id: 3,
                option: 'Option 30',
                isCorrect: false
            },
        ]
    },
    {
        id: 4,
        title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate perferendis sapiente, voluptates Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate perferendis sapiente, voluptates Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate perferendis sapiente, voluptates',
        options: [
            {
                id: 1,
                option: 'Option 10',
                isCorrect: true
            },
            {
                id: 2,
                option: 'Option 20',
                isCorrect: false
            },
            {
                id: 3,
                option: 'Option 30',
                isCorrect: false
            },
        ]
    }
]