import React, { Fragment } from 'react';

export default function Report({ userAnswers }) {
  return (
    <>
      <h1>Report</h1>
      <ul>
        {userAnswers.map(userAnswer => (
          <Fragment key={userAnswer.title}>
            <hr />
            <li>title: {userAnswer.title}</li>
            <li>answer: {userAnswer.answer_title}</li>
            <li>is correct: {userAnswer.isCorrect ? 'true' : 'false'}</li>
            <hr />
          </Fragment>
        ))}
      </ul>
    </>
  );
}
