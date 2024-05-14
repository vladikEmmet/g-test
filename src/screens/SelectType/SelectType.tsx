import React from 'react';
import styles from "./SelectType.module.scss";
import {Card} from "@/components/Card/Card";
import quiz from "../../assets/images/quiz.jpeg";
import dice from "../../assets/images/dice.jpeg";
import coin from "../../assets/images/coin.jpeg";
import fortune from "../../assets/images/fortune.jpeg";

export const SelectType = () => {
    return (
        <div className={styles.container}>
            <h1>Каким образом проверить тебя на гея?</h1>
            <h2>У меня есть несколько вариантов для тебя</h2>
            <div className={styles.cards}>
                <Card
                    title={"Тест на гея"}
                    image={quiz}
                    url={'/quiz'}
                />
                <Card
                    title={"Бросить кубик"}
                    image={dice}
                    url={'/dice'}
                />
                <Card
                    title={"Кинуть монетку"}
                    image={coin}
                    url={'/coin'}
                />
                <Card
                    title={"Колесо фортуны"}
                    image={fortune}
                    url={'/fortune'}
                />
            </div>
        </div>
    );
};