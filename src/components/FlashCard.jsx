import React, { useState } from "react";
const FlashCard = (props) => {
    const { question, img, answer, showAnswer,setShowAnswer } = props;

    const handleCardClick = () => setShowAnswer(!showAnswer);
    
    return (
        <div className="flash-card" onClick={handleCardClick}>
            {showAnswer ? (
                <div className="answer">
                    <h3>{answer}</h3>
                </div>
            ) : (
                <div className="question">
                        <h3>{question}</h3>
                        <img className="img" src={img} alt={question} />
                </div>
            )}
        </div>
    );
};
export default FlashCard;