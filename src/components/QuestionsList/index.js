import React from 'react';

import data from './data';

export default function QuestionsList({ incrementScore }) {
  const questions = [...data];

  function handleVerifyCorrectAnswer(isCorrect) {
    return isCorrect ? incrementScore() : false;
  }

  return (
    <ul>
      {questions.map(question => (
        <>
          <li>{question.title}</li>
          <ul>
            {question.answers.map(answer => (
              <li>
                {answer.answer_title}
                <button
                  type="button"
                  onClick={() => handleVerifyCorrectAnswer(answer.isCorrect)}
                >
                  right
                </button>
              </li>
            ))}
          </ul>
        </>
      ))}
    </ul>
  );
}
