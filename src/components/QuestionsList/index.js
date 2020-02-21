import React, { useState, useContext } from 'react';

import history from '../../services/history';
import useQuestions from '../../hooks/questions.hooks';
import { addToAnswerList } from '../../store/userAnswers/actions';
import { Store } from '../../store';

export default function QuestionsList({ incrementScore }) {
  const [, dispatch] = useContext(Store);
  const [questions, setQuestions] = useQuestions();
  const [userAnswers, setUserAnswers] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  function gameFinished() {
    setGameOver(true);
    history.push('/gameover');
  }

  function nextQuestion() {
    questions.shift();
    if (questions.length) {
      setQuestions([...questions]);
    } else {
      gameFinished();
    }
  }

  function addUserAnswers(question, answer) {
    setUserAnswers([...userAnswers, { title: question.title, ...answer }]);
    dispatch(addToAnswerList({ title: question.title, ...answer }));
  }

  function handleVerifyCorrectAnswer(question, answer) {
    question.isAnswerd = true;

    setQuestions([...questions]);
    addUserAnswers(question, answer);
    nextQuestion();
    return answer.isCorrect && incrementScore();
  }

  const firstQuestion = questions[0];

  function CurrentQuestion() {
    return (
      !gameOver && (
        <ul>
          <li key={firstQuestion.title}>{firstQuestion.title}</li>
          {!firstQuestion.isAnswerd && (
            <ul>
              {firstQuestion.answers.map(answer => (
                <li key={answer.answer_title}>
                  {answer.answer_title}
                  <button
                    type="button"
                    onClick={() =>
                      handleVerifyCorrectAnswer(firstQuestion, answer)
                    }
                  >
                    right
                  </button>
                </li>
              ))}
            </ul>
          )}
        </ul>
      )
    );
  }

  return <CurrentQuestion />;
}
