import React from "react";
import {AppRoute} from "app/router/components/AppRoute";
import {route} from "app/router/urls/routes";
import {AppSwitch} from "app/router/components/AppSwitch";

const ViewProductionSheets = React.lazy(() =>
  import("views/app/ProductionSheets/View_ProductionSheets/View_ProductionSheets"),
);
const ViewProductionSheetAdd = React.lazy(() =>
  import("views/app/ProductionSheets/View_ProductionSheetAdd/View_ProductionSheetAdd"),
);
const ViewProductionSheet = React.lazy(() =>
  import("views/app/ProductionSheets/View_ProductionSheet/View_ProductionSheet"),
);
const ViewProductionSheetEdit = React.lazy(() =>
  import("views/app/ProductionSheets/View_ProductionSheetEdit/View_ProductionSheetEdit"),
);

const RoutesProductionSheets = () => {
  return (
    <AppSwitch>
      <AppRoute exact path={route["app.productionSheets"]} component={ViewProductionSheets}/>
      <AppRoute
        exact
        path={route["app.productionSheet.create"]}
        component={ViewProductionSheetAdd}
      />
      <AppRoute
        exact
        path={route["app.productionSheet.edit"]()}
        component={ViewProductionSheetEdit}
      />
      <AppRoute exact path={route["app.productionSheet"]()} component={ViewProductionSheet}/>

    </AppSwitch>
  );
};

export default RoutesProductionSheets;
