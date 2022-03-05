import React from "react";
import {AppRoute} from "app/router/components/AppRoute";
import {route} from "app/router/urls/routes";
import {AppSwitch} from "app/router/components/AppSwitch";

const ViewInterWarehouseReceipts = React.lazy(() =>
  import("views/app/InterWarehouseReceipts/View_InterWarehouseReceipts/View_InterWarehouseReceipts"),
);
const ViewInterWarehouseReceiptAdd = React.lazy(() =>
  import("views/app/InterWarehouseReceipts/View_InterWarehouseReceiptAdd/View_InterWarehouseReceiptAdd"),
);
const ViewInterWarehouseReceipt = React.lazy(() =>
  import("views/app/InterWarehouseReceipts/View_InterWarehouseReceipt/View_InterWarehouseReceipt"),
);
const ViewInterWarehouseReceiptEdit = React.lazy(() =>
  import("views/app/InterWarehouseReceipts/View_InterWarehouseReceiptEdit/View_InterWarehouseReceiptEdit"),
);

const RoutesInterWarehouseReceipts = () => {
  return (
    <AppSwitch>
      <AppRoute exact path={route["app.interWarehouseReceipts"]} component={ViewInterWarehouseReceipts}/>
      <AppRoute
        exact
        path={route["app.interWarehouseReceipt.create"]}
        component={ViewInterWarehouseReceiptAdd}
      />
      <AppRoute
        exact
        path={route["app.interWarehouseReceipt.edit"]()}
        component={ViewInterWarehouseReceiptEdit}
      />
      <AppRoute exact path={route["app.interWarehouseReceipt"]()} component={ViewInterWarehouseReceipt}/>

    </AppSwitch>
  );
};

export default RoutesInterWarehouseReceipts;
