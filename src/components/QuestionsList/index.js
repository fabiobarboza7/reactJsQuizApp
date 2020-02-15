import React, { useState, Fragment } from 'react';

import data from './data';
import Report from '../Report';
import useQuestions from '../../hooks/questions.hooks';

export default function QuestionsList({ incrementScore }) {
  const [questions, setQuestions] = useQuestions([...data]);
  const [userAnswers, setUserAnswers] = useState([]);

  function addUserAnswers(question, answer) {
    setUserAnswers([...userAnswers, { title: question.title, ...answer }]);
  }

  function handleVerifyCorrectAnswer(question, answer) {
    question.isAnswerd = true;

    setQuestions([...questions]);
    addUserAnswers(question, answer);
    return answer.isCorrect && incrementScore();
  }

  return (
    <>
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
                      onClick={() =>
                        handleVerifyCorrectAnswer(question, answer)
                      }
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
      <Report userAnswers={userAnswers} />
    </>
  );
}
