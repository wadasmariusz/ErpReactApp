import {Link} from "react-router-dom";
import React from "react";
import {Plus} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "app/config/sizes";

export const AddButton = ({url}) =>
  <Link to={url} className="btn btn-success">
    <Plus size={SIZE_INPUT_ICON}/>
    Dodaj
  </Link>
