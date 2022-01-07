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
const ViewShelfEdit = React.lazy(() =>
  import("views/app/Shelves/View_ShelfEdit/View_ShelfEdit"),
);
const ViewWarehouseReceiptAdd = React.lazy(() =>
  import("views/app/WarehouseReceipts/View_WarehouseReceiptAdd/View_WarehouseReceiptAdd"),
);
const ViewWarehouseReleaseAdd = React.lazy(() =>
  import("views/app/WarehouseReleases/View_WarehouseReleaseAdd/View_WarehouseReleaseAdd"),
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

      {/*shelves*/}
      <AppRoute
        exact
        path={route["app.warehouse.shelf.edit"]()}
        component={ViewShelfEdit}
      />

      {/*documents*/}
      <AppRoute
        exact
        path={route["app.warehouse.release.create"]()}
        component={ViewWarehouseReleaseAdd}
      />

      <AppRoute
        exact
        path={route["app.warehouse.receipt.create"]()}
        component={ViewWarehouseReceiptAdd}
      />

    </AppSwitch>
  );
};

export default RoutesWarehouses;
