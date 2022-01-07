import React from "react";
import {AppRoute} from "app/router/components/AppRoute";
import {route} from "app/router/urls/routes";
import {AppSwitch} from "app/router/components/AppSwitch";


const ViewProductCategories = React.lazy(() =>
  import("views/app/ProductCategories/View_ProductCategories/View_ProductCategories"),
);
const ViewProductCategoryAdd = React.lazy(() =>
  import("views/app/ProductCategories/View_ProductCategoryAdd/View_ProductCategoryAdd"),
);
const ViewProductCategory = React.lazy(() =>
  import("views/app/ProductCategories/View_ProductCategory/View_ProductCategory"),
);
const ViewProductCategoryEdit = React.lazy(() =>
  import("views/app/ProductCategories/View_ProductCategoryEdit/View_ProductCategoryEdit"),
);

const RoutesProductCategories = () => {
  return (
    <AppSwitch>
      <AppRoute exact path={route["app.productCategories"]} component={ViewProductCategories}/>
      <AppRoute
        exact
        path={route["app.productCategory.create"]}
        component={ViewProductCategoryAdd}
      />
      <AppRoute
        exact
        path={route["app.productCategory.edit"]()}
        component={ViewProductCategoryEdit}
      />
      <AppRoute exact path={route["app.productCategory"]()} component={ViewProductCategory}/>

    </AppSwitch>
  );
};

export default RoutesProductCategories;
