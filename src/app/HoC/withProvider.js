import React from "react";

export const withProvider = (Provider) => (Component) => (props) => (
  <Provider>
    <Component {...props} />
  </Provider>
);
