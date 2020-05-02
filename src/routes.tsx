import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main/index';
import Timestamp from './pages/Timestamp';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/timestamp" component={Timestamp} />
      </Switch>
    </BrowserRouter>
  );
}
