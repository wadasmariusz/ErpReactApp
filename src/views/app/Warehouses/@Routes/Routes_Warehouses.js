import React from "react";
import {AppRoute} from "app/router/components/AppRoute";
import {route} from "app/router/urls/routes";
import {AppSwitch} from "app/router/components/AppSwitch";

const ViewWarehouses = React.lazy(() =>
  import("views/app/Warehouses/View_Warehouses/View_Warehouses"),
);
const ViewWarehouseAdd = React.lazy(() =>
  import("views/app/Warehouses/View_WarehouseAdd/View_WarehouseAdd"),
);
const ViewWarehouse = React.lazy(() =>
  import("views/app/Warehouses/View_Warehouse/View_Warehouse"),
);
const ViewWarehouseEdit = React.lazy(() =>
  import("views/app/Warehouses/View_WarehouseEdit/View_WarehouseEdit"),
);

const RoutesWarehouses = () => {
  return (
    <AppSwitch>
      <AppRoute exact path={route["app.warehouses"]} component={ViewWarehouses}/>
      <AppRoute
        exact
        path={route["app.warehouse.create"]}
        component={ViewWarehouseAdd}
      />
      <AppRoute
        exact
        path={route["app.warehouse.edit"]()}
        component={ViewWarehouseEdit}
      />
      <AppRoute exact path={route["app.warehouse"]()} component={ViewWarehouse}/>

    </AppSwitch>
  );
};

export default RoutesWarehouses;
