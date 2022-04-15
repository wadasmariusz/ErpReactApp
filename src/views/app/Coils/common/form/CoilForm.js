import React from "react";
import { InputText } from "components/form/text/Text/Input_Text";
import {Coin, Folder, Pen, Tags} from "react-bootstrap-icons";
import { SIZE_INPUT_ICON } from "app/config/sizes";
import { InputSubmit } from "components/form/special/Submit/Input_Submit";
import * as yup from "yup";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { InputDatePicker } from "components/form/special/Datepicker/Input_Datepicker";
import { InputTextarea } from "components/form/text/Textarea/Input_Textarea";
import { InputSelect } from "components/form/special/Select/Input_Select";
// import { InputCoilType } from "components/form/predefined/select/enum/Input_CoilType";

export const coilSchema = yup.object().shape({
  name: yup.string().nullable(),
  description: yup.string().nullable()
});

export const FormCoil = ({ submitText, cancelUrl }) => {
  return (
    <div className="row">
      <div className="col-12 pt-25">
        <InputText
          name="code"
          icon={<Tags size={SIZE_INPUT_ICON} />}
          label="Kod"
        />
      </div>
      <div className="col-12 pt-25">
        <InputText
          name="name"
          icon={<Tags size={SIZE_INPUT_ICON} />}
          label="Nazwa"
        />
      </div>

      <div className="col-12 pt-25">
        <InputText
          name={"minQuantity"}
          icon={<Tags size={SIZE_INPUT_ICON} />}
          label="Minimalna ilość"
        />
      </div>

      <div className="col-12 pt-25">
        <InputTextarea
          name="description"
          icon={<Pen size={SIZE_INPUT_ICON} />}
          label="Opis"
        />
      </div>


      <div className="col-12 pt-25">
        <InputText
          name={"width"}
          icon={<Tags size={SIZE_INPUT_ICON} />}
          label="Szerokość"
        />
      </div>
      <div className="col-12 pt-25">
        <InputText
          name={"thickness"}
          icon={<Tags size={SIZE_INPUT_ICON} />}
          label="Grubość"
        />
      </div>
      <div className="col-12 pt-25">
        <InputText
          name={"amountOfZinc"}
          icon={<Tags size={SIZE_INPUT_ICON} />}
          label="Ilość cynku"
        />
      </div>
      <div className="col-12 pt-25">
        <InputText
          name={"producer"}
          icon={<Tags size={SIZE_INPUT_ICON} />}
          label="Producent"
        />
      </div>
      <div className="col-12 pt-25">
        <InputText
          name={"steelGrade"}
          icon={<Tags size={SIZE_INPUT_ICON} />}
          label="Gatunek"
        />
      </div>
      <div className="col-12 pt-25">
        <InputText
          name={"color"}
          icon={<Tags size={SIZE_INPUT_ICON} />}
          label="Kolor"
        />
      </div>
      <div className="col-12 pt-25">
        <InputText
          name={"coilType"}
          icon={<Tags size={SIZE_INPUT_ICON} />}
          label="ENUM DODAC NA FRONT MAT CZY POLYSK DOMYSLNIE 0 lub 1"
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
