import React, { useState } from 'react'
import Flashcard from "./Flashcard";
import QuizData from "../data/quizes";

const CardSet = () => {
    const quizCount = QuizData.length;
    const [index, setIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);


    const changeCount = () => { //move to new question
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * quizCount);
        } while (newIndex === index);
        setIndex(newIndex);
        setShowAnswer(false); // Reset showAnswer to false
    };

    return (
        <div>
            <div className='quiz-count'>
                <h4>If you don't know the answer,<br />you are not a real cat person! 😾</h4>
                <h4>Number of cards: {quizCount}</h4>
            </div>
            <Flashcard
                question={QuizData[index].question}
                img={QuizData[index].img}
                answer={QuizData[index].answer}
                showAnswer={showAnswer}
                setShowAnswer={setShowAnswer}
            />
            <button onClick={changeCount}>→</button>
        </div>
    );
};
export default CardSet;