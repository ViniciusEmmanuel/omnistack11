import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

import { IState } from './interfaces/redux/logon';

const PrivateRoutes = () => {
  const auth = useSelector<IState>((state) => state.logon.auth);

  if (!auth) {
    return <Redirect to="/" exact />;
  }

  return (
    <>
      <Route path="/profile" component={Profile} />
      <Route path="/incidents/new" component={NewIncident} />
    </>
  );
};

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />
        <PrivateRoutes />
      </Switch>
    </BrowserRouter>
  );
}
