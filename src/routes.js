import React, { useReducer } from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import Home from './pages/Home';
import GameOver from './pages/GameOver';

import { Store } from './store';
import UserAnswers from './store/userAnswers/reducer';
import history from './services/history';

const { Provider } = Store;

export default function Routes() {
  const store = useReducer(UserAnswers);

  return (
    <Provider value={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/gameover" component={GameOver} />
        </Switch>
      </Router>
    </Provider>
  );
}
