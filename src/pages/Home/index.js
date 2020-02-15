import React from 'react';
import useScore from '../../hooks/score.hooks';
import QuestionsList from '../../components/QuestionsList';

export default function Home() {
  const [score, setScore] = useScore();

  function incrementScore() {
    setScore(score + 5);
  }

  return (
    <>
      <h1>Score: {score}</h1>
      <QuestionsList incrementScore={incrementScore} />
    </>
  );
}
