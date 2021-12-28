import React from "react";
import {AppRoute} from "app/router/components/AppRoute";
import {route} from "app/router/urls/routes";
import {AppSwitch} from "app/router/components/AppSwitch";

const ViewWarehouseReceipts = React.lazy(() =>
  import("views/app/WarehouseReceipts/View_WarehouseReceipts/View_WarehouseReceipts"),
);
const ViewWarehouseReceiptAdd = React.lazy(() =>
  import("views/app/WarehouseReceipts/View_WarehouseReceiptAdd/View_WarehouseReceiptAdd"),
);
const ViewWarehouseReceipt = React.lazy(() =>
  import("views/app/WarehouseReceipts/View_WarehouseReceipt/View_WarehouseReceipt"),
);
const ViewWarehouseReceiptEdit = React.lazy(() =>
  import("views/app/WarehouseReceipts/View_WarehouseReceiptEdit/View_WarehouseReceiptEdit"),
);

const RoutesWarehouseReceipts = () => {
  return (
    <AppSwitch>
      <AppRoute exact path={route["app.warehouseReceipts"]} component={ViewWarehouseReceipts}/>
      <AppRoute
        exact
        path={route["app.warehouseReceipt.create"]}
        component={ViewWarehouseReceiptAdd}
      />
      <AppRoute
        exact
        path={route["app.warehouseReceipt.edit"]()}
        component={ViewWarehouseReceiptEdit}
      />
      <AppRoute exact path={route["app.warehouseReceipt"]()} component={ViewWarehouseReceipt}/>

    </AppSwitch>
  );
};

export default RoutesWarehouseReceipts;
