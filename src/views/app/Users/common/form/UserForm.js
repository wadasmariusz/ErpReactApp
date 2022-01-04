import React from "react";
import { InputText } from "components/form/text/Text/Input_Text";
import {Envelope, Folder, Pen, PersonPlusFill, Tags} from "react-bootstrap-icons";
import { SIZE_INPUT_ICON } from "app/config/sizes";
import { InputSubmit } from "components/form/special/Submit/Input_Submit";
import * as yup from "yup";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { InputDatePicker } from "components/form/special/Datepicker/Input_Datepicker";
import { InputTextarea } from "components/form/text/Textarea/Input_Textarea";
import { InputSelect } from "components/form/special/Select/Input_Select";
// import { InputUserType } from "components/form/predefined/select/enum/Input_UserType";

export const userSchema = yup.object().shape({
  name: yup.string().nullable(),
  description: yup.string().nullable()
});

export const FormUser = ({ submitText, cancelUrl }) => {
  return (
    <div className="row">
      <div className="col-12 pt-25">
        <InputText
          name="email"
          icon={<Envelope size={SIZE_INPUT_ICON} />}
          label="email"
        />
      </div>
      <div className="col-12 pt-25">
        <InputText
          name="firstName"
          icon={<PersonPlusFill size={SIZE_INPUT_ICON} />}
          label="Imię"
        />
      </div>
      <div className="col-12 pt-25">
        <InputTextarea
          name="lastName"
          icon={<PersonPlusFill size={SIZE_INPUT_ICON} />}
          label="Nazwisko"
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
