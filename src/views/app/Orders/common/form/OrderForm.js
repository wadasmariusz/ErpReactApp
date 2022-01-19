import React, {useState} from "react";
import {InputText} from "components/form/text/Text/Input_Text";
import {
  Box,
  Coin, Grid3x2,
  HouseDoorFill,
  HouseFill,
  Ladder,
  Person,
  Phone,
  Pin,
  PinAngleFill, PinMap,
  Pinterest, Question,
  TrashFill
} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON, SIZE_INPUT_ICON_SM} from "app/config/sizes";
import {InputSubmit} from "components/form/special/Submit/Input_Submit";
import * as yup from "yup";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";
// import {InputWarehouse} from "../../../../../components/form/predefined/select/enum/Input_Warehouse";
import styled from "styled-components";
import {InputProduct} from "../../../../../components/form/predefined/select/enum/Input_Product";
// import {InputShelf} from "../../../../../components/form/predefined/select/enum/Input_Shelf";
import {useFieldArray, useFormContext} from "react-hook-form";
// import {InputSelectedWarehouse} from "../../../../../components/form/predefined/select/enum/InputSelectedWarehouse";
import {InputDatePicker} from "../../../../../components/form/special/Datepicker/Input_Datepicker";
import {InputBigCheckbox} from "../../../../../components/form/special/BigCheckbox/Input_BigCheckbox";
import {InputCheckbox} from "../../../../../components/form/special/Checkbox/Input_Checkbox";
import PhoneInput from "react-phone-input-2";
import {AgInputNumberField} from "ag-grid-community";

export const orderSchema = yup.object().shape({
  realizationDate: yup.date(),
  isDelivery: yup.bool(),
  buyer:yup.string(),
  phoneNumber: yup.string(),
  deliveryAddress: yup.string(),
  items: yup.array().of(
    yup.object().shape(
      {
        name: yup.string(),
        productId: yup.string(),
        quantity: yup.string().required(),
        price: yup.string()
      })
  )
});

const ColoredLine = styled.div`
  border-bottom: 1px solid grey;
  width: 100%;
`;


export const FormOrder = ({submitText, cancelUrl, isUpdate}) => {
  const [inputList, setInputList] = useState([{productId: "", name: "", quantity: "", price: ""}]);
  const {control, setValue, watch, register} = useFormContext();
  const {items} = watch();
  const {fields, append, remove} = useFieldArray({
    control,
    name: "items"
  });

  const handleAppend = () => {
    append({
      name: "",
      productId: "",
      quantity: "",
      price: ""
    });
  }

// handle click event of the Remove button
  const handleRemoveClick = index => () => {
    remove(index);
  }

  return (
    <div className="row">
      <div className="col-12 pt-25" >
        <InputText
          name="buyer"
          type="text"
          icon={<Person size={SIZE_INPUT_ICON}/>}
          label="Klient"
        />
      </div>
      <div className="col-12 pt-25" >
        <InputText
          name="phoneNumber"
          type="text"
          icon={<Phone size={SIZE_INPUT_ICON}/>}
          label="Numer telefonu:"
        />
      </div>
      <div className="col-12 pt-25" >
        <InputText
          name="deliveryAddress"
          type="text"
          icon={<PinMap size={SIZE_INPUT_ICON}/>}
          label="Adres dostawy"
        />
      </div>
      <div className="col-12 pt-25" >
        <InputDatePicker
          name="realizationData"
          type="dateTime"
        />
      </div>
      <div>

      </div>
      <div className="col-12 pt-25">
        <h4 className="mt-2">Pozycje:</h4>
      </div>
      {fields.map((x, i) => {
        return (
          <div key={i} className="col-12">
            <div className="row">
              <div className="col-11">
                <div className="row">

                  <div className="col-12 pt-25">
                    <InputProduct
                      name={`items[${i}].productId`}
                    />
                  </div>

                  <div className="col-12 pt-25" >
                    <InputText
                      name={`items[${i}].name`}
                      type="text"
                      icon={<Box size={SIZE_INPUT_ICON}/>}
                      label="Nazwa"
                    />
                  </div>
                  <div className="col-12 pt-25">
                    <InputText
                      required
                      name={`items[${i}].quantity`}
                      type="text"
                      icon={<Grid3x2 size={SIZE_INPUT_ICON}/>}
                      label="Ilość"
                    />
                  </div>

                  <div className="col-12 pt-25">
                    <InputText
                      name={`items[${i}].price`}
                      type="text"
                      icon={<Coin size={SIZE_INPUT_ICON}/>}
                      label="Cena"
                    />
                  </div>

                  <div className="col-12 py-25">
                    {inputList.length >= 2 &&
                      <ColoredLine/>
                    }
                  </div>
                </div>
              </div>
              <div className="col-1 p-0 my-auto d-flex justify-content-center">
                {fields.length !== 1 &&
                  <Button onClick={handleRemoveClick(i)} color="danger" className="p-1">
                    <TrashFill className="mr-25" size={SIZE_INPUT_ICON_SM}/>
                  </Button>}
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                {fields.length - 1 === i &&
                  <Button onClick={handleAppend} color="primary">
                    Dodaj pozycje
                  </Button>
                }
              </div>
            </div>
          </div>
        );
      })}
      <div className="col-12 d-flex justify-content-end">
        <Button tag={Link} to={cancelUrl} color="secondary">
          Anuluj
        </Button>
        <InputSubmit value={submitText} className="ml-25"/>
      </div>
    </div>
  );
};
