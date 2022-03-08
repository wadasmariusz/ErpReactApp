import React from "react";
import {Redirect, Switch} from "react-router-dom";
import {RootRoute} from "app/router/components/RootRoute";
import {route} from "app/router/urls/routes";
import {useAuth} from "app/hooks/auth/useAuth";

const ViewDashboard = React.lazy(() => import("views/app/Dashboard/View_Dashboard/View_Dashboard"),);
const RoutesPigeons = React.lazy(() => import("views/app/Pigeons/@Routes/Routes_Pigeons"),);
const RoutesWarehouses = React.lazy(() => import("views/app/Warehouses/@Routes/Routes_Warehouses"),);
const RoutesWarehouseReleases = React.lazy(() => import("views/app/WarehouseReleases/@Routes/Routes_WarehouseReleases"),);
const RoutesInterWarehouseReleases = React.lazy(() => import("views/app/InterWarehouseReleases/@Routes/Routes_InterWarehouseReleases"),);
const RoutesInterWarehouseTransfers = React.lazy(() => import("views/app/InterWarehouseTransfers/@Routes/Routes_InterWarehouseTransfers"),);
const RoutesWarehouseReceipts = React.lazy(() => import("views/app/WarehouseReceipts/@Routes/Routes_WarehouseReceipts"),);
const RoutesProductionSheets = React.lazy(() => import("views/app/ProductionSheets/@Routes/Routes_ProductionSheets"),);
const RoutesInterWarehouseReceipts = React.lazy(() => import("views/app/InterWarehouseReceipts/@Routes/Routes_InterWarehouseReceipts"),);
const RoutesOrders = React.lazy(() => import("views/app/Orders/@Routes/Routes_Orders"),);
const RoutesProducts = React.lazy(() => import("views/app/Products/@Routes/Routes_Products"),);
const RoutesCoils = React.lazy(() => import("views/app/Coils/@Routes/Routes_Coils"),);
const RoutesUsers = React.lazy(() => import("views/app/Users/@Routes/Routes_Users"),);
const RoutesProductKinds = React.lazy(() => import("views/app/ProductKinds/@Routes/Routes_ProductKinds"),);
const RoutesProductCategories = React.lazy(() => import("views/app/ProductCategories/@Routes/Routes_ProductCategories"),);
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
        path={route["app.coils"]}
        component={RoutesCoils}
      />
      <RootRoute
        path={route["app.productKinds"]}
        component={RoutesProductKinds}
      />
      <RootRoute
        path={route["app.productCategories"]}
        component={RoutesProductCategories}
      />
      <RootRoute
        path={route["app.warehouses"]}
        component={RoutesWarehouses}
      />
      <RootRoute
        path={route["app.users"]}
        component={RoutesUsers}
      />
      <RootRoute
        path={route["app.interWarehouseTransfers"]}
        component={RoutesInterWarehouseTransfers}
      />
      <RootRoute
        path={route["app.warehouseReceipts"]}
        component={RoutesWarehouseReceipts}
      />
      <RootRoute
        path={route["app.productionSheets"]}
        component={RoutesProductionSheets}
      />
      <RootRoute
        path={route["app.interWarehouseReceipts"]}
        component={RoutesInterWarehouseReceipts}
      />
      <RootRoute
        path={route["app.orders"]}
        component={RoutesOrders}
      />
      <RootRoute
        path={route["app.warehouseReleases"]}
        component={RoutesWarehouseReleases}
      />
      <RootRoute
        path={route["app.interWarehouseReleases"]}
        component={RoutesInterWarehouseReleases}
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
