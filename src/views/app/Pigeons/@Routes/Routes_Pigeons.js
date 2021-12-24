import React from 'react';
import {AppRoute} from "app/router/components/AppRoute";
import {route} from "app/router/urls/routes";
import {AppSwitch} from "app/router/components/AppSwitch";


const ViewPigeons = React.lazy(() => import('views/app/Pigeons/View_Pigeons/View_Pigeons'));
const ViewPigeonAdd = React.lazy(() => import('views/app/Pigeons/View_PigeonAdd/View_PigeonAdd'));
const ViewPigeon = React.lazy(() => import('views/app/Pigeons/View_Pigeon/View_Pigeon'));
const ViewPigeonEdit = React.lazy(() => import('views/app/Pigeons/View_PigeonEdit/View_PigeonEdit'));

const RoutesPigeons = () => {
  return (
    <AppSwitch>
      <AppRoute
        exact
        path={route['app.pigeons']}
        component={ViewPigeons}
      />
      <AppRoute
        exact
        path={route['app.pigeon.create']}
        component={ViewPigeonAdd}
      />
      <AppRoute
        exact
        path={route['app.pigeon.edit']()}
        component={ViewPigeonEdit}
      />
      <AppRoute
        path={route['app.pigeon']()}
        component={ViewPigeon}
      />
    </AppSwitch>
  );
};

export default RoutesPigeons;
