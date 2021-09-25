import React from "react";
import { Switch, Route } from "react-router-dom";
import {routes} from './routeConfig';

import asyncComponent from "util/asyncComponent";
import { renderRoutes } from 'react-router-config';
import {
  PAYTIFY_ROUTE,
  ACCOUNTIFY_ROUTE,
  DASHBOARD_ROUTE,
  CUSTOMERS_ROUTE,
  NOTIFY_ROUTE,
  SHIPIFY_ROUTE
} from "../pages/constant";

const App = ({match}) => {
  console.log('match.url>>>', match.url);
  return (
    <div className="gx-main-content-wrapper">
      <Switch>
        <Route path={DASHBOARD_ROUTE} component={asyncComponent(() => import('pages/DashBoard/index'))}/>
        <Route path={CUSTOMERS_ROUTE} component={asyncComponent(() => import('pages/CustomerPage/pages/list'))}/>
        <Route path={PAYTIFY_ROUTE} component={asyncComponent(() => import('pages/Modules/Payify/pages/index'))}/>
        <Route path={ACCOUNTIFY_ROUTE} component={asyncComponent(() => import('pages/Modules/Accountify/pages/index'))}/>
        <Route path={NOTIFY_ROUTE} component={asyncComponent(() => import('pages/Modules/Notify/pages/index'))}/>
        <Route path={SHIPIFY_ROUTE} component={asyncComponent(() => import('pages/Modules/Shipify/pages/index'))}/>
        {/*{renderRoutes(routes)}*/}
      </Switch>
    </div>
  )
};

export default App;
