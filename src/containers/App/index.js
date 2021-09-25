import React, {memo, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import URLSearchParams from 'url-search-params'
import {Redirect, Route, Switch, useHistory, useLocation, useRouteMatch} from "react-router-dom";
import {LocaleProvider} from "antd";
import {IntlProvider} from "react-intl";

import AppLocale from "lngProvider";
import MainApp from "./MainApp";
import SignIn from "pages/Authentication/SignIn";
import SignUp from "pages/Authentication/SignUp";
import {setInitUrl} from "appRedux/actions/Auth";
import {onLayoutTypeChange, onNavStyleChange, setThemeType} from "appRedux/actions/Setting";

import {
  LAYOUT_TYPE_BOXED,
  LAYOUT_TYPE_FRAMED,
  LAYOUT_TYPE_FULL,
  NAV_STYLE_ABOVE_HEADER,
  NAV_STYLE_BELOW_HEADER,
  NAV_STYLE_DARK_HORIZONTAL,
  NAV_STYLE_DEFAULT_HORIZONTAL,
  NAV_STYLE_INSIDE_HEADER_HORIZONTAL
} from "../../constants/ThemeSetting";
import {renderRoutes} from "react-router-config";
import {routes} from "../../routes/routeConfig";
import {DASHBOARD_ROUTE} from "../../pages/DashBoard/constant";
import {SIGNIN_ROUTE, SIGNUP_ROUTE} from "../../pages/Authentication/constant";

const RestrictedRoute = ({component: Component, location, token, ...rest}) =>
  <Route
    {...rest}
    render={props =>
      token
        ? <Component {...props} />
        : <Redirect
          to={{
            pathname: '/signin',
            state: {from: location}
          }}
        />}
  />;


const App = () => {

  const dispatch = useDispatch();
  const {locale, navStyle, layoutType} = useSelector(({settings}) => settings);
  const {token, initURL} = useSelector(({auth}) => auth);

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();


  useEffect(() => {
    let link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = "/css/style.css";
    link.className = 'gx-style';
    document.body.appendChild(link);
  });

  useEffect(() => {
    if (initURL === '') {
      dispatch(setInitUrl(location.pathname));
    }
    const params = new URLSearchParams(location.search);

    if (params.has("theme")) {
      dispatch(setThemeType(params.get('theme')));
    }
    if (params.has("nav-style")) {
      dispatch(onNavStyleChange(params.get('nav-style')));
    }
    if (params.has("layout-type")) {
      dispatch(onLayoutTypeChange(params.get('layout-type')));
    }
    setLayoutType(layoutType);
    setNavStyle(navStyle);
  }, [dispatch, initURL, layoutType, location.pathname, location.search, navStyle]);

  const setLayoutType = (layoutType) => {
    if (layoutType === LAYOUT_TYPE_FULL) {
      document.body.classList.remove('boxed-layout');
      document.body.classList.remove('framed-layout');
      document.body.classList.add('full-layout');
    } else if (layoutType === LAYOUT_TYPE_BOXED) {
      document.body.classList.remove('full-layout');
      document.body.classList.remove('framed-layout');
      document.body.classList.add('boxed-layout');
    } else if (layoutType === LAYOUT_TYPE_FRAMED) {
      document.body.classList.remove('boxed-layout');
      document.body.classList.remove('full-layout');
      document.body.classList.add('framed-layout');
    }
  };

  const setNavStyle = (navStyle) => {
    if (navStyle === NAV_STYLE_DEFAULT_HORIZONTAL ||
      navStyle === NAV_STYLE_DARK_HORIZONTAL ||
      navStyle === NAV_STYLE_INSIDE_HEADER_HORIZONTAL ||
      navStyle === NAV_STYLE_ABOVE_HEADER ||
      navStyle === NAV_STYLE_BELOW_HEADER) {
      document.body.classList.add('full-scroll');
      document.body.classList.add('horizontal-layout');
    } else {
      document.body.classList.remove('full-scroll');
      document.body.classList.remove('horizontal-layout');
    }
  };

  useEffect(() => {
    if (location.pathname === '/') {
      console.log('initURL', initURL);
      if (token === null) {
        history.push(SIGNIN_ROUTE);
      } else if (initURL === '' || initURL === '/' || initURL === SIGNIN_ROUTE) {
        history.push(DASHBOARD_ROUTE);
      } else {
        history.push(initURL);
      }
    }
  }, [token, initURL, location, history]);

  const currentAppLocale = AppLocale[locale.locale];

  return (
    <LocaleProvider locale={currentAppLocale.antd}>
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}>

        <Switch>
          <Route exact path={SIGNIN_ROUTE} component={SignIn}/>
          <Route exact path={SIGNUP_ROUTE} component={SignUp}/>
          {/*{renderRoutes(routes)}*/}
          <RestrictedRoute path={`${match.url}`} token={token} location={location}
                           component={MainApp}/>
        </Switch>
      </IntlProvider>
    </LocaleProvider>
  )
};

export default memo(App);
