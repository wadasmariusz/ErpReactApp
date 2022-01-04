import React from "react";
import {AppRoute} from "app/router/components/AppRoute";
import {route} from "app/router/urls/routes";
import {AppSwitch} from "app/router/components/AppSwitch";

const ViewUsers = React.lazy(() =>
  import("views/app/Users/View_Users/View_Users"),
);
const ViewUserAdd = React.lazy(() =>
  import("views/app/Users/View_UserAdd/View_UserAdd"),
);
const ViewUser = React.lazy(() =>
  import("views/app/Users/View_User/View_User"),
);
const ViewUserEdit = React.lazy(() =>
  import("views/app/Users/View_UserEdit/View_UserEdit"),
);

const RoutesUsers = () => {
  return (
    <AppSwitch>
      <AppRoute exact path={route["app.users"]} component={ViewUsers}/>
      <AppRoute
        exact
        path={route["app.user.create"]}
        component={ViewUserAdd}
      />
      <AppRoute
        exact
        path={route["app.user.edit"]()}
        component={ViewUserEdit}
      />
      <AppRoute exact path={route["app.user"]()} component={ViewUser}/>

    </AppSwitch>
  );
};

export default RoutesUsers;
