import React, { useState, Fragment } from 'react';

import data from './data';

export default function QuestionsList({ incrementScore }) {
  const [questions, setQuestions] = useState([...data]);

  function handleVerifyCorrectAnswer(question, { isCorrect }) {
    question.isAnswerd = true;

    setQuestions([...questions]);
    return isCorrect && incrementScore();
  }

  return (
    <ul>
      {questions.map(question => (
        <Fragment key={question.title}>
          <li key={question.title}>{question.title}</li>
          {!question.isAnswerd && (
            <ul>
              {question.answers.map(answer => (
                <li key={answer.answer_title}>
                  {answer.answer_title}
                  <button
                    type="button"
                    onClick={() => handleVerifyCorrectAnswer(question, answer)}
                  >
                    right
                  </button>
                </li>
              ))}
            </ul>
          )}
        </Fragment>
      ))}
    </ul>
  );
}
