import SignIn from "./SignIn";
import SignUp from "./SignUp";


export const AuthenticationRoute = [
  {
    path: '/login',
    component: SignIn
  },
  {
    path: '/signup',
    component: SignUp
  }
]
