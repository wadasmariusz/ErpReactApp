import React from "react";
import {AppRoute} from "app/router/components/AppRoute";
import {route} from "app/router/urls/routes";
import {AppSwitch} from "app/router/components/AppSwitch";

const ViewInterWarehouseTransfers = React.lazy(() =>
  import("views/app/InterWarehouseTransfers/View_InterWarehouseTransfers/View_InterWarehouseTransfers"),
);
const ViewInterWarehouseTransferAdd = React.lazy(() =>
  import("views/app/InterWarehouseTransfers/View_InterWarehouseTransferAdd/View_InterWarehouseTransferAdd"),
);
const ViewInterWarehouseTransfer = React.lazy(() =>
  import("views/app/InterWarehouseTransfers/View_InterWarehouseTransfer/View_InterWarehouseTransfer"),
);
const ViewInterWarehouseTransferEdit = React.lazy(() =>
  import("views/app/InterWarehouseTransfers/View_InterWarehouseTransferEdit/View_InterWarehouseTransferEdit"),
);

const RoutesInterWarehouseTransfers = () => {
  return (
    <AppSwitch>
      <AppRoute exact path={route["app.interWarehouseTransfers"]} component={ViewInterWarehouseTransfers}/>
      <AppRoute
        exact
        path={route["app.interWarehouseTransfer.create"]}
        component={ViewInterWarehouseTransferAdd}
      />
      <AppRoute
        exact
        path={route["app.interWarehouseTransfer.edit"]()}
        component={ViewInterWarehouseTransferEdit}
      />
      <AppRoute exact path={route["app.interWarehouseTransfer"]()} component={ViewInterWarehouseTransfer}/>

    </AppSwitch>
  );
};

export default RoutesInterWarehouseTransfers;
