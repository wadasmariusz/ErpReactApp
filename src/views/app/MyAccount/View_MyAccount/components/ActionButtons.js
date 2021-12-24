import React from 'react';
import {Link} from "react-router-dom";
import {route} from "app/router/urls/routes";
import {Pen} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON_SM} from "app/config/sizes";

export const ActionButtons = () => {

  return (
    <>
      <Link to={route['app.myAccount.edit']} className="btn btn-primary">
        <Pen className="mr-25" size={SIZE_INPUT_ICON_SM}/>
        Edytuj
      </Link>
    </>
  );
};
