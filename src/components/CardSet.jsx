import React, { useState } from 'react'
import Flashcard from "./Flashcard";
import QuizData from "../data/quizes";

const CardSet = () => {
    const quizCount = QuizData.length;
    const [index, setIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [userAnswer, setUserAnswer] = useState(""); 
    const [isCorrect, setIsCorrect] = useState(null); 

    const reset = () => {
        setShowAnswer(false); // Reset showAnswer to false
        setUserAnswer(""); // Reset user's answer
        setIsCorrect(null); // Reset isCorrect state
    }

    const changeCount = () => { //move to new question
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * quizCount);
        } while (newIndex === index);
        setIndex(newIndex);
        reset();
    };
    const increaseCount = () => {
        { index < quizCount - 1 && setIndex(index + 1) };
        reset();
    }
    const decreaseCount = () => {
        { index > 0 && setIndex(index - 1) };
        reset();
    }


    const handleAnswerChange = (e) => {
        setUserAnswer(e.target.value);
    };

    const handleAnswerSubmit = (e) => {
        // Logic to handle answer submission
        e.preventDefault();
        const userAnswerArray = userAnswer.trim().toLowerCase().split(/\s+/);
        const correctAnswerArray = QuizData[index].answer.trim().toLowerCase().split(/\s+/);
        const correctString = " " + correctAnswerArray.join(" ") + " ";
        const userString = " " + userAnswerArray.join(" ") + " ";

        // Check if userString is an exact substring of correctString
        if (userAnswer.trim() === "") {
            setIsCorrect(null);
        } else if (correctString.includes(userString)) {
            setIsCorrect(true);
            setShowAnswer(true);
        } else {
            setIsCorrect(false);
        }
        
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
            
            {isCorrect !== null && (
                <div>
                    {isCorrect ? (
                        <p style={{ color: 'green' }}>Correct!</p>
                    ) : isCorrect === false ? (
                        <p style={{ color: 'red' }}>Incorrect</p>
                    ): <p>     </p>
                    }
                </div>
            )}
            <form className='container' onSubmit={handleAnswerSubmit}>
                <input
                    type="text"
                    value={userAnswer}
                    onChange={handleAnswerChange}
                    placeholder="Type your answer here"
                    className={isCorrect === false ? 'incorrect' : isCorrect === true ? 'correct' : ''}
                />
                <button type='submit' disabled={showAnswer}>Submit Answer</button>
            </form>
            
            <br></br>
            <button onClick={decreaseCount} disabled={index <= 0}>←</button>
            <button onClick={increaseCount} disabled={index >= quizCount - 1}>→</button>
            <button onClick={changeCount}>Shuffle card</button>
        </div>
    );
};
export default CardSet;