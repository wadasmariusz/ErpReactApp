import React from 'react';
import {Route, Switch} from "react-router-dom";
import {ViewErr404} from "views/error/View_404";

export const AppSwitch = ({children}) => {
  return (
    <Switch>
      {children}
      <Route component={ViewErr404}/>
    </Switch>
  );
};
