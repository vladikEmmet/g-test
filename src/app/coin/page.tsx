"use client";

import React, { useState, useCallback } from "react";
import "./page.module.scss"; // Убедитесь, что импортирует правильный файл стилей

const App = () => {
    const [result, setResult] = useState("");
    const [animate, setAnimate] = useState(false);
    const name = typeof window !== "undefined" ? localStorage.getItem("name") : null;

    const coinToss = useCallback(() => {
        setAnimate(false); // Сначала выключаем анимацию
        setTimeout(() => {
            let newResult;
            if (name && (/елжан/gi.test(name) || /айтош/gi.test(name))) {
                newResult = "heads";
            } else {
                newResult = "tails";
            }
            setResult(newResult);
            setAnimate(true); // Включаем анимацию снова
            console.log(newResult);
        }, 10); // Небольшая задержка для сброса класса анимации
    }, [name]);

    return (
        <div className="App">
            <h1 style={{textAlign: "center", marginBottom: "10px"}}>ОРЕЛ - ТЫ НАТУРАЛ, РЕШКА - ТЫ ГЕЙ</h1>
            <div id="coin" className={`${result} ${animate ? 'animate' : ''}`} key={result}>
                <div className="side-a">
                    <h2>ОРЕЛ</h2>
                </div>
                <div className="side-b">
                    <h2>РЕШКА</h2>
                </div>
            </div>
            <button id="btn" onClick={coinToss}>
                Кинуть монетку
            </button>
        </div>
    );
};

export default App;
