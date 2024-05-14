"use client";
import styles from "./page.module.scss";

export default function QuizResultsPage() {
    const name = localStorage.getItem('name');

    return (
        <div className={styles.container}>
            <h1>Результаты теста</h1>
            <p>{(name && (/елжан/gi.test(name) || /айтош/gi.test(name))) ? "Вы гей" : "Вы натурал"}</p>
        </div>
    );
}