import React from "react";
import * as yup from "yup";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";

export const canceledProductionSheetSchema = yup.object().shape({
});

export const FormProductionSheet = ({submitText, cancelUrl}) => {
  return (
    <div className="row">
    </div>
  );
};
