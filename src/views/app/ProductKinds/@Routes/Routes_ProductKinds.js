import React from "react";
import {AppRoute} from "app/router/components/AppRoute";
import {route} from "app/router/urls/routes";
import {AppSwitch} from "app/router/components/AppSwitch";


const ViewProductKinds = React.lazy(() =>
  import("views/app/ProductKinds/View_ProductKinds/View_ProductKinds"),
);
const ViewProductKindAdd = React.lazy(() =>
  import("views/app/ProductKinds/View_ProductKindAdd/View_ProductKindAdd"),
);
const ViewProductKind = React.lazy(() =>
  import("views/app/ProductKinds/View_ProductKind/View_ProductKind"),
);
const ViewProductKindEdit = React.lazy(() =>
  import("views/app/ProductKinds/View_ProductKindEdit/View_ProductKindEdit"),
);

const RoutesProductKinds = () => {
  return (
    <AppSwitch>
      <AppRoute exact path={route["app.productKinds"]} component={ViewProductKinds}/>
      <AppRoute
        exact
        path={route["app.productKind.create"]}
        component={ViewProductKindAdd}
      />
      <AppRoute
        exact
        path={route["app.productKind.edit"]()}
        component={ViewProductKindEdit}
      />
      <AppRoute exact path={route["app.productKind"]()} component={ViewProductKind}/>

    </AppSwitch>
  );
};

export default RoutesProductKinds;
