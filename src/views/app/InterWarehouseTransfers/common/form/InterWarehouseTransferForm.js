import React, {useState} from "react";
import {InputText} from "components/form/text/Text/Input_Text";
import {BoundingBox, Box, Cart, Coin, Folder, Pen, Person, PlusCircle, Tags, TrashFill} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON, SIZE_INPUT_ICON_SM} from "app/config/sizes";
import {InputSubmit} from "components/form/special/Submit/Input_Submit";
import * as yup from "yup";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";
import {InputDatePicker} from "components/form/special/Datepicker/Input_Datepicker";
import {InputTextarea} from "components/form/text/Textarea/Input_Textarea";
import {InputSourceWarehouse} from "../../../../../components/form/predefined/select/enum/Input_SourceWarehouse";
import {InputDestinationWarehouse} from "../../../../../components/form/predefined/select/enum/Input_DestinationWarehouse";
import CountBy from "underscore/modules/countBy";
import styled from "styled-components";
import {InputProduct} from "../../../../../components/form/predefined/select/enum/Input_Product";
import {InputShelf} from "../../../../../components/form/predefined/select/enum/Input_Shelf";
import {useFieldArray, useFormContext} from "react-hook-form";
import {
  InputWarehouseReleaseProduct
} from "../../../../../components/form/predefined/select/enum/Input_WarehouseReleaseProduct";
import {
  InputWarehouseProductShelf
} from "../../../../../components/form/predefined/select/enum/InputWarehouseProductShelf";
import {InputDestinationShelf} from "../../../../../components/form/predefined/select/enum/Input_DestinationShelf";
import {InputSourceShelf} from "../../../../../components/form/predefined/select/enum/Input_SourceShelf";

// import { InputSelect } from "components/form/special/Select/Input_Select";
// import { InputInterWarehouseTransferType } from "components/form/predefined/select/enum/Input_InterWarehouseTransferType";

export const interWarehouseTransferSchema = yup.object().shape({
  sourceWarehouseId: yup.string().required(),
  destinationWarehouseId: yup.string().required(),
  items: yup.array().of(
    yup.object().shape({productId: yup.string().required(), quantity: yup.string().required(),
      sourceShelfId: yup.string().required(), destinationShelfId: yup.string().required()})
  )
});

const ColoredLine = styled.div`
  border-bottom: 1px solid grey;
  width: 100%;
`;


export const FormInterWarehouseTransfer = ({submitText, cancelUrl, isUpdate}) => {
  const [inputList, setInputList] = useState([{productId: "", quantity: "", sourceShelfId: "", destinationShelfId: ""}]);

  const {control, setValue, watch, register} = useFormContext();
  const {items, sourceWarehouseId, destinationWarehouseId} = watch();
  const {fields, append, remove} = useFieldArray({
    control,
    name: "items"
  });

  const handleAppend = () => {
    append({productId: "", quantity: "",  sourceShelfId: "", destinationShelfId: ""});
  }

// handle click event of the Remove button
  const handleRemoveClick = index =>() => {
    remove(index);
  }

  return (
    <div className="row">
      <div className="col-12 pt-25">
        <InputSourceWarehouse
          disabled={isUpdate}
        />
      </div>
      <div className="col-12 pt-25">
        <InputDestinationWarehouse/>
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
                    <InputText
                      required
                      name={`items[${i}].quantity`}
                      type="text"
                      icon={<Coin size={SIZE_INPUT_ICON}/>}
                      label="Ilość"
                    />
                  </div>

                  <div className="col-12 pt-25">
                    <InputWarehouseReleaseProduct
                      name={`items[${i}].productId`}
                      warehouseId={sourceWarehouseId}
                    />
                  </div>

                  <div className="col-12 pt-25">
                    <InputSourceShelf
                      name={`items[${i}].sourceShelfId`}
                      sourceWarehouseId={sourceWarehouseId}
                      productId={items[i].productId}
                    />
                  </div>

                  <div className="col-12 pt-25">
                    <InputDestinationShelf
                      name={`items[${i}].destinationShelfId`}
                      destinationWarehouseId={destinationWarehouseId}
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
