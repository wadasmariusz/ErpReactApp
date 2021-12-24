import React from "react";
import {InputText} from "components/form/text/Text/Input_Text";
import {CurrencyDollar} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "app/config/sizes";
import {InputSubmit} from "components/form/special/Submit/Input_Submit";
import * as yup from "yup";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";
import {InputPigeon} from "components/form/predefined/select/enum/Input_Pigeon";

export const pigeonNoticeSchema = yup.object().shape({
  pigeonId: yup.number().required(),
  price: yup.number().nullable(),
});

export const FormPigeonNotice = ({submitText, cancelUrl}) => {
  return (
    <div className="row">
      <div className="col-12 pt-25">
        <InputPigeon/>
      </div>
      <div className="col-12 pt-25">
        <InputText
          name="price"
          icon={<CurrencyDollar size={SIZE_INPUT_ICON}/>}
          label="Cena"
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
