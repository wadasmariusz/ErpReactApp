import React from "react";
import {AppRoute} from "app/router/components/AppRoute";
import {route} from "app/router/urls/routes";
import {AppSwitch} from "app/router/components/AppSwitch";

const ViewOrders = React.lazy(() =>
  import("views/app/Orders/View_Orders/View_Orders"),
);
const ViewOrderAdd = React.lazy(() =>
  import("views/app/Orders/View_OrderAdd/View_OrderAdd"),
);
const ViewOrder = React.lazy(() =>
  import("views/app/Orders/View_Order/View_Order"),
);
const ViewOrderEdit = React.lazy(() =>
  import("views/app/Orders/View_OrderEdit/View_OrderEdit"),
);

const RoutesOrders = () => {
  return (
    <AppSwitch>
      <AppRoute exact path={route["app.orders"]} component={ViewOrders}/>
      <AppRoute
        exact
        path={route["app.order.create"]}
        component={ViewOrderAdd}
      />
      <AppRoute
        exact
        path={route["app.order.edit"]()}
        component={ViewOrderEdit}
      />
      <AppRoute exact path={route["app.order"]()} component={ViewOrder}/>

    </AppSwitch>
  );
};

export default RoutesOrders;
