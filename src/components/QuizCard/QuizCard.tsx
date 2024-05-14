import React, {FC} from 'react';
import styles from "./QuizCard.module.scss";
import {IQuestion} from "@/components/QuizController/QuizController";

interface QuizCardProps {
    question: IQuestion;
    onAnswer: () => void;
}

export const QuizCard: FC<QuizCardProps> = ({question, onAnswer}) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.question}>{question.question}</h2>
            <div className={styles.answers}>
                {question.answers.map(answer => (
                    <button key={answer.id} className={styles.answer} onClick={onAnswer}>{answer.answer}</button>
                ))}
            </div>
        </div>
    );
};