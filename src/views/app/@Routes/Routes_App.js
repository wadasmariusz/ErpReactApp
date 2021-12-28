import React from "react";
import {Redirect, Switch} from "react-router-dom";
import {RootRoute} from "app/router/components/RootRoute";
import {route} from "app/router/urls/routes";
import {useAuth} from "app/hooks/auth/useAuth";

const ViewDashboard = React.lazy(() => import("views/app/Dashboard/View_Dashboard/View_Dashboard"),);
const RoutesPigeons = React.lazy(() => import("views/app/Pigeons/@Routes/Routes_Pigeons"),);
const RoutesWarehouses = React.lazy(() => import("views/app/Warehouses/@Routes/Routes_Warehouses"),);
const RoutesWarehouseReceipts = React.lazy(() => import("views/app/WarehouseReceipts/@Routes/Routes_WarehouseReceipts"),);
const RoutesProducts = React.lazy(() => import("views/app/Products/@Routes/Routes_Products"),);
const RoutesPigeonNotices = React.lazy(() => import("views/app/PigeonNotices/@Routes/Routes_PigeonNotices"),);
const RoutesMyAccount = React.lazy(() => import("views/app/MyAccount/@Routes/Routes_MyAccount"),);

export const RoutesApp = () => {
  const { isLoggedIn } = useAuth();

  // return null
  return (
    <Switch>
      {!isLoggedIn() && (
        <Redirect from={route["app"]} to={route["auth.login"]} />
      )}
      <RootRoute
        exact
        path={route["app.dashboard"]}
        component={ViewDashboard}
      />
      <RootRoute
        path={route["app.products"]}
        component={RoutesProducts}
      />
      <RootRoute
        path={route["app.warehouses"]}
        component={RoutesWarehouses}
      />
      <RootRoute
        path={route["app.warehouseReceipts"]}
        component={RoutesWarehouseReceipts}
      />
      <RootRoute
        path={route["app.myAccount"]}
        component={RoutesMyAccount}
      />


      <RootRoute
        path={route["app.pigeons"]}
        component={RoutesPigeons}
      />
      <RootRoute
        path={route["app.pigeonNotices"]}
        component={RoutesPigeonNotices}
      />

    </Switch>
  );
};
