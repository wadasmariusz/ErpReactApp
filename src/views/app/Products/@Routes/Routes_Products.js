import React from "react";
import {AppRoute} from "app/router/components/AppRoute";
import {route} from "app/router/urls/routes";
import {AppSwitch} from "app/router/components/AppSwitch";

const ViewProducts = React.lazy(() =>
  import("views/app/Products/View_Products/View_Products"),
);
const ViewProductAdd = React.lazy(() =>
  import("views/app/Products/View_ProductAdd/View_ProductAdd"),
);
const ViewProduct = React.lazy(() =>
  import("views/app/Products/View_Product/View_Product"),
);
const ViewProductEdit = React.lazy(() =>
  import("views/app/Products/View_ProductEdit/View_ProductEdit"),
);

const RoutesProducts = () => {
  return (
    <AppSwitch>
      <AppRoute exact path={route["app.products"]} component={ViewProducts}/>
      <AppRoute
        exact
        path={route["app.product.create"]}
        component={ViewProductAdd}
      />
      <AppRoute
        exact
        path={route["app.product.edit"]()}
        component={ViewProductEdit}
      />
      <AppRoute exact path={route["app.product"]()} component={ViewProduct}/>

    </AppSwitch>
  );
};

export default RoutesProducts;
