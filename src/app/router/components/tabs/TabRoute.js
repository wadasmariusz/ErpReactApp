import React from 'react';
import {AppRoute} from "app/router/components/AppRoute";
import PropTypes from 'prop-types'

export const TabRoute = ({ tab, exactActive, to, ...props}) => {
  // removes tab & to props
  return (
    <AppRoute
      {...props}
    />
  );
};

TabRoute.propTypes = {
  tab: PropTypes.shape({
    icon: PropTypes.node,
    title: PropTypes.string,
    badge: PropTypes.oneOf([
      PropTypes.number,
      PropTypes.string,
    ]),
  }),
}
