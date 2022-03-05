import React from "react";
import {AppRoute} from "app/router/components/AppRoute";
import {route} from "app/router/urls/routes";
import {AppSwitch} from "app/router/components/AppSwitch";

const ViewCoils = React.lazy(() =>
  import("views/app/Coils/View_Coils/View_Coils"),
);
const ViewCoilAdd = React.lazy(() =>
  import("views/app/Coils/View_CoilAdd/View_CoilAdd"),
);
const ViewCoil = React.lazy(() =>
  import("views/app/Coils/View_Coil/View_Coil"),
);
const ViewCoilEdit = React.lazy(() =>
  import("views/app/Coils/View_CoilEdit/View_CoilEdit"),
);

const RoutesCoils = () => {
  return (
    <AppSwitch>
      <AppRoute exact path={route["app.coils"]} component={ViewCoils}/>
      <AppRoute
        exact
        path={route["app.coil.create"]}
        component={ViewCoilAdd}
      />
      <AppRoute
        exact
        path={route["app.coil.edit"]()}
        component={ViewCoilEdit}
      />
      <AppRoute exact path={route["app.coil"]()} component={ViewCoil}/>

    </AppSwitch>
  );
};

export default RoutesCoils;
