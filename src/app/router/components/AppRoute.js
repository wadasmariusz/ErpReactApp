import React, {Suspense} from 'react';
import Spinner from "components/@vuexy/spinner/Loading-spinner";
import {Route} from "react-router-dom";
import {TabSwitchNav} from "app/router/components/tabs/TabSwitchNav";

const appRouteRender = (Component, withTabNav) => function R(props) {
  return (
    <>
      {withTabNav && (
        <TabSwitchNav/>
      )}
      <Suspense fallback={<Spinner/>}>
        <Component {...props} />
      </Suspense>
    </>
  );
}

export const AppRoute = ({
  component: Component,
  exact,
  path,
  withTabNav, // show AppSwitch TabNavigation while waiting 4 lazy component
  ...props
}) => {
  return (
    <Route
      {...props}
      exact={exact}
      path={path}
      render={appRouteRender(Component, withTabNav)}
    />
  );
}
