import React, { useContext } from 'react';
import Report from '../../components/Report';

import { Store } from '../../store';
import history from '../../services/history';
import { resetAnswerList } from '../../store/userAnswers/actions';

export default function GameOver() {
  const [state, dispatch] = useContext(Store);
  const userAnswers = state;

  function restartGame() {
    dispatch(resetAnswerList());
    history.push('/');
  }

  return userAnswers ? (
    <>
      <h1>Game over!</h1>
      <button type="button" onClick={() => restartGame()}>
        Try again
      </button>
      <Report userAnswers={userAnswers} />
    </>
  ) : (
    <button type="button" onClick={() => restartGame()}>
      restart
    </button>
  );
}
