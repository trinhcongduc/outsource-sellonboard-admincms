import asyncComponent from "util/asyncComponent";
import DashBoardPage from "./index";


export const DashboardRoute = [
  {
    path: '/',
    component: asyncComponent(DashBoardPage)
  }
]
