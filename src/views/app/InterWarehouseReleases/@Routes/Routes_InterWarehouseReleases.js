import React from "react";
import {AppRoute} from "app/router/components/AppRoute";
import {route} from "app/router/urls/routes";
import {AppSwitch} from "app/router/components/AppSwitch";

const ViewInterWarehouseReleases = React.lazy(() =>
  import("views/app/InterWarehouseReleases/View_InterWarehouseReleases/View_InterWarehouseReleases"),
);
const ViewInterWarehouseReleaseAdd = React.lazy(() =>
  import("views/app/InterWarehouseReleases/View_InterWarehouseReleaseAdd/View_InterWarehouseReleaseAdd"),
);
const ViewInterWarehouseRelease = React.lazy(() =>
  import("views/app/InterWarehouseReleases/View_InterWarehouseRelease/View_InterWarehouseRelease"),
);
const ViewInterWarehouseReleaseEdit = React.lazy(() =>
  import("views/app/InterWarehouseReleases/View_InterWarehouseReleaseEdit/View_InterWarehouseReleaseEdit"),
);

const RoutesInterWarehouseReleases = () => {
  return (
    <AppSwitch>
      <AppRoute exact path={route["app.interWarehouseReleases"]} component={ViewInterWarehouseReleases}/>
      <AppRoute
        exact
        path={route["app.interWarehouseRelease.create"]}
        component={ViewInterWarehouseReleaseAdd}
      />
      <AppRoute
        exact
        path={route["app.interWarehouseRelease.edit"]()}
        component={ViewInterWarehouseReleaseEdit}
      />
      <AppRoute exact path={route["app.interWarehouseRelease"]()} component={ViewInterWarehouseRelease}/>

    </AppSwitch>
  );
};

export default RoutesInterWarehouseReleases;
