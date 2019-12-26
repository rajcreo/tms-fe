import React from 'react';
import { Route, Redirect } from "react-router-dom";
import NotFound from './../containers/NotFound';
import Login from '../containers/Login';

export default ({ user }) => [
  <Route exact key="root" path="/"><div>123</div></Route>,
  <Route exact key="login" path="/login" render={(props) => <Login {...props} />} />,
  <Route path="/404" render={(props) => <NotFound {...props} />} />,
  <Redirect to="/404" />
];
