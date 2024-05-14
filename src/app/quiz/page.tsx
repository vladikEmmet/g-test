import {Metadata} from "next";
import {Quiz} from "@/screens/Quiz/Quiz";

export const metadata: Metadata = {
    title: "Тест на гея",
    description: "Тест на гея",
    robots: "index, follow",
    keywords: ["тест", "гей", "тест на гея"],
}

export default function QuizPage() {
    return (
        <div>
            <Quiz />
        </div>
    );
}