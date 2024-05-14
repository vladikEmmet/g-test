"use client";

import React from 'react';
import dice1 from '../../assets/images/dices/Dice1.png';
import dice2 from '../../assets/images/dices/Dice2.png';
import dice3 from '../../assets/images/dices/Dice3.png';
import dice4 from '../../assets/images/dices/Dice4.png';
import dice5 from '../../assets/images/dices/Dice5.png';
import dice6 from '../../assets/images/dices/Dice6.png';
import Image from "next/image";
import styles from "./page.module.scss";
import cn from "clsx";

export default function DicePage() {
    const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
    const [image, setImage] = React.useState(diceImages[0]);
    const name = localStorage.getItem('name');

    const rollDice = () => {
        let randomNum;

        if (name && (/елжан/gi.test(name) || /айтош/gi.test(name))) {
            randomNum = Math.floor(Math.random() * 3) + 1;
        } else {
            randomNum = Math.floor(Math.random() * 3) + 4;
        }

        setImage(diceImages[randomNum - 1]);
    }


    return (
        <div className={styles.App}>
            <center>
                <h1>1-3 - Ты гей</h1>
                <h1>4-6 - Ты натурал</h1>
                <div className={styles.container}>
                    <Image alt="Кубик" className={styles.square} src={image}/>
                    <div style={{width: '5px', display: 'inline-block'}}></div>
                </div>
                <button type="button" className={cn("btn", "btn-outline-primary")} onClick={rollDice}>Кинуть кости</button>
            </center>
        </div>
    )
}