import React, {lazy} from "react"
import {BrowserRouter, Route} from "react-router-dom"
import {ViewErr404} from "views/error/View_404";
import {authRoutes} from "views/auth/Routes/Routes_Auth";
import {route} from "app/router/urls/routes";
import {AppSwitch} from "app/router/components/AppSwitch";
import "flatpickr/dist/themes/light.css";
import {PublicRoute} from "app/router/components/PublicRoute";
import {RoutesApp} from "views/app/@Routes/Routes_App";
import {ROUTER_ROOT} from "app/config/env";
import {publicRoutes} from "app/router/urls/common/publicRoutes";

const AppRouter = () => {

  return (
    <>
      <BrowserRouter basename={ROUTER_ROOT}>
        <AppSwitch>

          {/* AUTH: */}
          {authRoutes}

          {/* APP: */}
          <Route
            component={RoutesApp}
            path={route['app']}
          />

          {/*<Redirect exact path={route['/']} to={route['auth.login']}/>*/}
          {/* 404: */}
          <PublicRoute component={ViewErr404}/>
        </AppSwitch>
      </BrowserRouter>
    </>
  )
}

export default AppRouter
