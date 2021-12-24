import {RootRoute} from "app/router/components/RootRoute";
import {route} from "app/router/urls/routes";
import React, {lazy} from "react";
import {ViewErr401} from "views/error/View_401";
import {Route} from "react-router-dom";

const Login          = lazy(() => import(`views/auth/View_Login/View_Login`));
const Register       = lazy(() => import(`views/auth/View_Register/View_Register`));
const Logout         = lazy(() => import(`views/auth/View_Logout/View_Logout`));
const PasswordReset  = lazy(() => import(`views/auth/View_PasswordReset/View_PasswordReset`));
const PasswordForgot = lazy(() => import(`views/auth/View_PasswordForgot/View_PasswordForgot`));

export const authRoutes = [
  <RootRoute
    exact
    key="unauthorized"
    path={route['auth.unauthorized']}
    component={ViewErr401}
  />,
  <RootRoute
    exact
    key="login"
    path={route['auth.login']}
    fullLayout
    component={Login}
  />,
  <RootRoute
    exact
    key="register"
    path={route['auth.register']}
    fullLayout
    component={Register}
  />,
  <RootRoute
    key="password.forgot"
    path={route['auth.password.forgot']}
    fullLayout
    component={PasswordForgot}
  />,
  <RootRoute
    key="password.reset"
    path={route['auth.password.reset']}
    fullLayout
    component={PasswordReset}
  />,
  <Route
    key="logout"
    path={route['auth.logout']}
    component={Logout}
  />,
]
