import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

const PrivateRoutes = () => {
  const userJson = localStorage.getItem('@behero/user');

  if (!userJson) {
    return <Redirect to="/" exact />;
  }

  if (userJson) {
    const { email, token } = JSON.parse(userJson);

    if (!email || !token) {
      return <Redirect to="/" exact />;
    }
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
