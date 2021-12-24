import React from 'react';
import PublicLayout from '@vuexy/PublicLayout';
import { AppRoute } from 'app/router/components/AppRoute';
import PropTypes from 'prop-types';

function publicRouteRender(Component, fullWidth) {
  return function R(props) {
    return (
      <PublicLayout fullWidth={fullWidth}>
        <Component {...props} />
      </PublicLayout>
    );
  }
}

export const PublicRoute = ({
  component: Component,
  fullWidth,
  ...props
}) => (
  <AppRoute
    {...props} // can overwrite exact
    component={publicRouteRender(Component, fullWidth)}
  />
);

PublicRoute.propTypes = {
  fullWidth: PropTypes.bool,
  component: PropTypes.any,
}
