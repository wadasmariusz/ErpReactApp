import React from "react";
import {AppRoute} from "app/router/components/AppRoute";
import {route} from "app/router/urls/routes";
import {AppSwitch} from "app/router/components/AppSwitch";

const ViewPigeonNotices = React.lazy(() =>
  import("views/app/PigeonNotices/View_PigeonNotices/View_PigeonNotices"),
);
const ViewPigeonNoticeAdd = React.lazy(() =>
  import("views/app/PigeonNotices/View_PigeonNoticeAdd/View_PigeonNoticeAdd"),
);
const ViewPigeonNotice = React.lazy(() =>
  import("views/app/PigeonNotices/View_PigeonNotice/View_PigeonNotice"),
);
const ViewPigeonNoticeEdit = React.lazy(() =>
  import("views/app/PigeonNotices/View_PigeonNoticeEdit/View_PigeonNoticeEdit"),
);

const RoutesPigeonNotices = () => {
  return (
    <AppSwitch>
      <AppRoute exact path={route["app.pigeonNotices"]} component={ViewPigeonNotices}/>
      <AppRoute
        exact
        path={route["app.pigeonNotice.create"]}
        component={ViewPigeonNoticeAdd}
      />
      <AppRoute
        exact
        path={route["app.pigeonNotice.edit"]()}
        component={ViewPigeonNoticeEdit}
      />
      <AppRoute exact path={route["app.pigeonNotice"]()} component={ViewPigeonNotice}/>

    </AppSwitch>
  );
};

export default RoutesPigeonNotices;
