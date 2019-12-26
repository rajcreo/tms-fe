import React from 'react';
import { Route } from "react-router-dom";
import Home from '../containers/Home';

export default ({ user }) => [
  <Route exact key="about" path="/about" render={(props) => <Home {...props} user={user} />} />,
  <Route exact key="users" path="/users"><div>abcd</div></Route>
];
