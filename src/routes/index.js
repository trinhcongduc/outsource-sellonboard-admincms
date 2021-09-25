import React from "react";
import { Route, Switch } from "react-router-dom";
import {routes} from './routeConfig';

import asyncComponent from "util/asyncComponent";
import { renderRoutes } from 'react-router-config';

const App = ({match}) => {
  console.log('match.url>>>', match.url);
  return (
    <div className="gx-main-content-wrapper">
      <Switch>
        <Route path={`${match.url}`} component={asyncComponent(() => import('pages/SamplePage'))}/>
        {/*{renderRoutes(routes)}*/}
      </Switch>
    </div>
  )
};

export default App;
