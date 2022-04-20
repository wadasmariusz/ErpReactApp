import React from "react";
import {AppRoute} from "app/router/components/AppRoute";
import {route} from "app/router/urls/routes";
import {AppSwitch} from "app/router/components/AppSwitch";

const ViewSheets = React.lazy(() =>
  import("views/app/Sheets/View_Sheets/View_Sheets"),
);
const ViewSheet = React.lazy(() =>
  import("views/app/Sheets/View_Sheet/View_Sheet"),
);

const RoutesSheets = () => {
  return (
    <AppSwitch>
      <AppRoute exact path={route["app.sheets"]} component={ViewSheets}/>
      <AppRoute exact path={route["app.sheet"]()} component={ViewSheet}/>
    </AppSwitch>
  );
};

export default RoutesSheets;
