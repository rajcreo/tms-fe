import React from 'react';
import { get } from 'lodash';
import { Switch } from "react-router-dom";
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';


export default (props) => (
  <Switch>
    {[
      ...(get(props, 'user', null) ? PrivateRoutes(props) : []),
      ...PublicRoutes(props),
    ]}
  </Switch>
);
