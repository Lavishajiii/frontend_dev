import React from 'react';
import './MainScreen.css';

const MainScreen = ({ question, currentIndex, totalQuestions, onNext, onPrev }) => {
  if (!question) return <p>Loading...</p>;

  return (
    <main>
      <div className="question-container">
        <h2>Question {currentIndex + 1}</h2>
        <p>{question.text}</p>
        <ul>
          {question.options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      </div>
      <div className="navigation">
        <button onClick={onPrev} disabled={currentIndex === 0}>
          Previous
        </button>
        <button onClick={onNext} disabled={currentIndex === totalQuestions - 1}>
          Next
        </button>
      </div>
    </main>
  );
};

export default MainScreen;
