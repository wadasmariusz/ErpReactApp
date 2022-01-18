import React from "react";
import { InputText } from "components/form/text/Text/Input_Text";
import { Folder, Pen, Tags } from "react-bootstrap-icons";
import { SIZE_INPUT_ICON } from "app/config/sizes";
import { InputSubmit } from "components/form/special/Submit/Input_Submit";
import * as yup from "yup";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export const warehouseCategoriesSchema = yup.object().shape({
  warehouseCategoriesId: yup.array(),
});

export const FormWarehouseCategories = ({ submitText, cancelUrl }) => {
  return (
    <div className="row">
      <div className="col-12 pt-25">
        <InputText
          name="productCategoriesId"
          icon={<Tags size={SIZE_INPUT_ICON} />}
          label="Rodzaj"
        />
      </div>
      <div className="col-12 d-flex justify-content-end">
        <Button tag={Link} to={cancelUrl} color="secondary">
          Anuluj
        </Button>
        <InputSubmit value={submitText} className="ml-25" />
      </div>
    </div>
  );
};
