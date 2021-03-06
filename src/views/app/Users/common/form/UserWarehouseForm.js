import React from "react";
import {InputSubmit} from "components/form/special/Submit/Input_Submit";
import * as yup from "yup";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";
import {InputWarehouse} from "../../../../../components/form/predefined/select/enum/Input_Warehouse";

export const userWarehouseSchema = yup.object().shape({
  "warehouseId": yup.number().required()
});

export const FormUserWarehouse = ({submitText, cancelUrl}) => {
  return (
    <div className="row">
      <div className="col-12 pt-25">
        <InputWarehouse />
      </div>
      <div className="col-12 d-flex justify-content-end">
        <Button tag={Link} to={cancelUrl} color="secondary">
          Anuluj
        </Button>
        <InputSubmit value={submitText} className="ml-25"/>
      </div>
    </div>
  );
};
