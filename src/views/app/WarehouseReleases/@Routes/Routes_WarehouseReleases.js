import React from "react";
import {AppRoute} from "app/router/components/AppRoute";
import {route} from "app/router/urls/routes";
import {AppSwitch} from "app/router/components/AppSwitch";

const ViewWarehouseReleases = React.lazy(() =>
  import("views/app/WarehouseReleases/View_WarehouseReleases/View_WarehouseReleases"),
);
const ViewWarehouseReleaseAdd = React.lazy(() =>
  import("views/app/WarehouseReleases/View_WarehouseReleaseAdd/View_WarehouseReleaseAdd"),
);
const ViewWarehouseRelease = React.lazy(() =>
  import("views/app/WarehouseReleases/View_WarehouseRelease/View_WarehouseRelease"),
);
const ViewWarehouseReleaseEdit = React.lazy(() =>
  import("views/app/WarehouseReleases/View_WarehouseReleaseEdit/View_WarehouseReleaseEdit"),
);

const RoutesWarehouseReleases = () => {
  return (
    <AppSwitch>
      <AppRoute exact path={route["app.warehouseReleases"]} component={ViewWarehouseReleases}/>
      <AppRoute
        exact
        path={route["app.warehouseRelease.create"]}
        component={ViewWarehouseReleaseAdd}
      />
      <AppRoute
        exact
        path={route["app.warehouseRelease.edit"]()}
        component={ViewWarehouseReleaseEdit}
      />
      <AppRoute exact path={route["app.warehouseRelease"]()} component={ViewWarehouseRelease}/>

    </AppSwitch>
  );
};

export default RoutesWarehouseReleases;
