import {AppRoute} from 'app/router/components/AppRoute';
import {AppSwitch} from 'app/router/components/AppSwitch';
import {route} from 'app/router/urls/routes';
import React from 'react';
import ViewMyAccount from 'views/app/MyAccount/View_MyAccount/View_MyAccount';
import ViewMyAccountEdit from 'views/app/MyAccount/View_MyAccountEdit/View_MyAccountEdit';

const RoutesMyAccount = () => {
  return (
    <div>
      <AppSwitch>
        <AppRoute
          exact
          path={route['app.myAccount']}
          component={ViewMyAccount}
        />
        <AppRoute
          exact
          path={route['app.myAccount.edit']}
          component={ViewMyAccountEdit}
        />
      </AppSwitch>
    </div>
  );
};

export default RoutesMyAccount;
