import {CurrentUserProfileRoute} from 'pages/Profile/route';
import {CustomerRoute} from 'pages/CustomerPage/route';
import {DashboardRoute} from "pages/DashBoard/routes";
import EmptyLayout from "components/Layout/EmptyLayout";
import MasterLayout from "components/Layout/MasterLayout";
import {AuthenticationRoute} from "../pages/Authentication/routes";

export const routes = [
  {
    component: EmptyLayout,
    routes: [
      AuthenticationRoute,
      {
        component: MasterLayout,
        path: '/',
        routes:[
          // CurrentUserProfileRoute,
          // CustomerRoute,
          // DashboardRoute
        ]
      }
    ]
  }
]
