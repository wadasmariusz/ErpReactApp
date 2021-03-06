import React from "react";
import {InputText} from "components/form/text/Text/Input_Text";
import {InputSubmit} from "components/form/special/Submit/Input_Submit";
import * as yup from "yup";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";
import {House} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "../../../../../app/config/sizes";

export const warehouseShelfSchema = yup.object().shape({
  "name": yup.string().required()
});

export const FormWarehouseShelf = ({submitText, cancelUrl}) => {
  return (
    <div className="row">
      <div className="col-12 pt-25">
        <InputText
          icon={<House size={SIZE_INPUT_ICON} />}
          required
          name="name"
          label="Nazwa"
        />
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
