"use client";

import React, { useState } from 'react';
import styles from "./QuizController.module.scss";
import { QuizCard } from "@/components/QuizCard/QuizCard";
import { useRouter } from "next/navigation";

export interface IAnswer {
    id: number;
    answer: string;
}

export interface IQuestion {
    id: number;
    question: string;
    answers: IAnswer[];
}

const questions: IQuestion[] = [
    {
        id: 1,
        question: "Ты любишь мужчин?",
        answers: [
            {
                id: 1,
                answer: "Да",
            },
            {
                id: 2,
                answer: "Нет",
            }
        ],
    },
    {
        id: 2,
        question: "Как ты относишься к геям?",
        answers: [
            {
                id: 1,
                answer: "Положительно/нейтрально",
            },
            {
                id: 2,
                answer: "Отрицательно",
            }
        ],
    },
    {
        id: 3,
        question: "Ты когда-нибудь целовался с мужчиной?",
        answers: [
            {
                id: 1,
                answer: "Да",
            },
            {
                id: 2,
                answer: "Нет",
            }
        ],
    },
    {
        id: 4,
        question: "Ты учился в КТЛ?",
        answers: [
            {
                id: 1,
                answer: "Да",
            },
            {
                id: 2,
                answer: "Нет",
            }
        ]
    },
    {
        id: 5,
        question: "Айтуар норм?",
        answers: [
            {
                id: 1,
                answer: "Да",
            },
            {
                id: 2,
                answer: "Нет",
            }
        ]
    }
];

export const QuizController = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const router = useRouter();

    const onAnswer = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
        } else {
            router.push("/quiz/results");
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.progress} style={{ width: `${(currentQuestion) / questions.length * 100}%` }} />
            <QuizCard question={questions[currentQuestion]} onAnswer={onAnswer} />
        </div>
    );
};
