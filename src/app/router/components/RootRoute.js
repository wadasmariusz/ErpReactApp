import {Route} from "react-router-dom";
import {ContextLayout} from "app/context/@vuexy/Layout";
import React, {Suspense} from "react";
import Spinner from "components/@vuexy/spinner/Loading-spinner";

function rootRouteRender (Component, fullLayout, isHorizontal) {
  return function R(props) {
    return (
      <ContextLayout.Consumer>
        {context => {
          let LayoutTag =
            fullLayout === true
              ? context.fullLayout
              : context.state.activeLayout === "horizontal" || isHorizontal
              ? context.horizontalLayout
              : context.VerticalLayout
          return (
            <LayoutTag {...props}>
              <Suspense fallback={<Spinner/>}>
                <Component {...props} />
              </Suspense>
            </LayoutTag>
          )
        }}
      </ContextLayout.Consumer>
    );
  }
}


export const RootRoute = ({
  component: Component,
  fullLayout,
  isHorizontal,
  permission,
  path,
  exact,
  ...props
}) => (
  <Route
    {...props}
    path={path}
    exact={exact}
    render={rootRouteRender(Component, fullLayout, isHorizontal)}
  />
);
