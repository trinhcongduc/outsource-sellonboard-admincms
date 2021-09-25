import {CurrentUserProfileRoute} from 'pages/Profile/route';
import {CustomerRoute} from 'pages/CustomerPage/route';
import {DashboardRoute} from "pages/DashBoard/routes";

export const routes = [
  {
    routes: [
      CurrentUserProfileRoute,
      CustomerRoute,
      DashboardRoute
    ]
  }
]
