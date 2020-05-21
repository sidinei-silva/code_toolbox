import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main/index';
import Timestamp from './pages/Timestamp';
import BorderRadius from './pages/BorderRadius';
import BoxShadow from './pages/BoxShadow';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/timestamp" component={Timestamp} />
        <Route path="/border-radius" component={BorderRadius} />
        <Route path="/box-shadow" component={BoxShadow} />
      </Switch>
    </BrowserRouter>
  );
}
