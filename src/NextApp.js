import React, { Suspense } from "react";
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "assets/vendors/style";
import "styles/wieldy.less";
import configureStore, { history } from './appRedux/store';
import App from "./containers/App/index";
import {renderRoutes} from "react-router-config";
import {routes} from "./routes/routeConfig";

const store = configureStore(/ provide initial state if any /);

const NextApp = () =>
  <BrowserRouter>
    <Suspense fallback="loading">
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" component={App}/>
          </Switch>
        </ConnectedRouter>
      </Provider>;
    </Suspense>
  </BrowserRouter>



export default NextApp;
