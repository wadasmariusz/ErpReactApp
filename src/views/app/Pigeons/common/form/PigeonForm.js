import React from 'react';
import {InputText} from "components/form/text/Text/Input_Text";
import {Calendar, Circle, Pen, Tags} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "app/config/sizes";
import {InputSubmit} from "components/form/special/Submit/Input_Submit";
import * as yup from "yup";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";
import {InputDatePicker} from "components/form/special/Datepicker/Input_Datepicker";
import {InputPigeonGender} from "components/form/predefined/select/enum/Input_PigeonGender";
import {InputPigeonColor} from "components/form/predefined/select/enum/Input_PigeonColor";
import {InputPigeonEyeColor} from "components/form/predefined/select/enum/Input_PigeonEyeColor";
import {InputPigeonStatus} from "components/form/predefined/select/enum/Input_PigeonStatus";
import {InputTextarea} from "components/form/text/Textarea/Input_Textarea";
import {InputMalePigeon} from "components/form/predefined/select/enum/Input_MalePigeon";
import {InputFemalePigeon} from "components/form/predefined/select/enum/Input_FemalePigeon";
import {InputWarehouse} from "components/form/predefined/select/enum/Input_Warehouse";

export const pigeonSchema = yup.object().shape({
  "ringNumber": yup.string().nullable(),
  "name": yup.string().nullable(),
  "gender": yup.number().nullable(),
  "year": yup.number().nullable(),
  "hatchingDate": yup.string().nullable(),
  "status": yup.number().nullable(),
  "pigeonColorId": yup.number().nullable(),
  "pigeonEyeColorId": yup.number().nullable(),
  "description": yup.string().nullable(),
  "breedId": yup.number().nullable(),
  "fatherId": yup.number().nullable(),
  "motherId": yup.number().nullable(),
  "warehouseId": yup.number().nullable(),
});

export const FormPigeon = ({submitText, cancelUrl}) => {
  return (
    <div className="row">
      <div className="col-6 col-lg-4 pt-25">
        <InputText
          required
          name="ringNumber"
          icon={<Circle size={SIZE_INPUT_ICON}/>}
          label="Nr obrączki"
        />
      </div>
      <div className="col-6 col-lg-4 pt-25">
        <InputText
          name="name"
          icon={<Tags size={SIZE_INPUT_ICON}/>}
          label="Imię"
        />
      </div>
      <div className="col-6 col-lg-4 pt-25">
        <InputText
          name="year"
          icon={<Calendar size={SIZE_INPUT_ICON}/>}
          label="Rocznik"
        />
      </div>
      <div className="col-6 col-lg-4 pt-25">
        <InputPigeonGender/>
      </div>
      <div className="col-6 col-lg-4 pt-25">
        <InputPigeonColor/>
      </div>
      <div className="col-6 col-lg-4 pt-25">
        <InputPigeonEyeColor/>
      </div>
      <div className="col-6 col-lg-4 pt-25">
        <InputPigeonStatus/>
      </div>
      <div className="col-6 col-lg-4 pt-25">
        <InputDatePicker
          name="hatchingDate"
          icon={<Calendar size={SIZE_INPUT_ICON}/>}
          label="Data wyklucia"
        />
      </div>
      <div className="col-6 col-lg-4 pt-25">
        <InputWarehouse />
      </div>
      <div className="col-6 col-lg-6 pt-25">
        <InputMalePigeon
          name="fatherId"
        />
      </div>
      <div className="col-6 col-lg-6 pt-25">
        <InputFemalePigeon
        name="motherId"
        />
      </div>

      <div className="col-12 col-lg-12 pt-25">
        <InputTextarea
          name="description"
          icon={<Pen size={SIZE_INPUT_ICON}/>}
          label="Opis"
        />
      </div>
      <div className="col-12 d-flex justify-content-end">
        <Button tag={Link} to={cancelUrl} color="secondary">Anuluj</Button>
        <InputSubmit value={submitText} className="ml-25"/>
      </div>
    </div>
  );
};
