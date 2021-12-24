import {Link} from "react-router-dom";
import React from "react";
import {Pen} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "app/config/sizes";

export const EditButton = ({url}) =>
  <Link to={url} className="btn btn-primary">
    <Pen className="mr-25" size={SIZE_INPUT_ICON}/>
    Edytuj
  </Link>
