import React, {useState} from "react";
import {InputText} from "components/form/text/Text/Input_Text";
import {Coin, TrashFill} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON, SIZE_INPUT_ICON_SM} from "app/config/sizes";
import {InputSubmit} from "components/form/special/Submit/Input_Submit";
import * as yup from "yup";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";
import {InputWarehouse} from "../../../../../components/form/predefined/select/enum/Input_Warehouse";
import CountBy from "underscore/modules/countBy";
import styled from "styled-components";
import {useFieldArray, useFormContext} from "react-hook-form";
import {
  InputWarehouseReleaseProduct
} from "../../../../../components/form/predefined/select/enum/Input_WarehouseReleaseProduct";
import {
  InputWarehouseProductShelf
} from "../../../../../components/form/predefined/select/enum/InputWarehouseProductShelf";
import {InputSelectedWarehouse} from "../../../../../components/form/predefined/select/enum/InputSelectedWarehouse";

export const warehouseReleaseSchema = yup.object().shape({
  warehouseId: yup.string().required(),
  items: yup.array().of(
    yup.object().shape({productId: yup.string().required(), quantity: yup.string().required(), shelfId: yup.string().required()})
  )
});

const ColoredLine = styled.div`
  border-bottom: 1px solid grey;
  width: 100%;
`;

export const FormWarehouseRelease = ({defaultWarehouseId, submitText, cancelUrl, isUpdate}) => {
  const [inputList, setInputList] = useState([{productId: "", quantity: "", shelfId: ""}]);

  const {control, setValue, watch, register} = useFormContext();
  const {warehouseId = defaultWarehouseId, items} = watch();
  const {fields, append, remove} = useFieldArray({
    control,
    name: "items"
  });

  const handleAppend = () => {
    append({
      productId: "",
      quantity: "",
      shelfId: ""
    });
  }

// handle click event of the Remove button
  const handleRemoveClick = index => () => {
    remove(index);
  }

  return (
    <div className="row">
      <div className="col-12 pt-25">
        { defaultWarehouseId != null ?
          (<InputSelectedWarehouse
            value = {defaultWarehouseId}
            disabled= {true}
          />) :
          (<InputWarehouse
            disabled={isUpdate}
          />)
        }
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
                    <InputWarehouseReleaseProduct
                      name={`items[${i}].productId`}
                      warehouseId={warehouseId}
                    />
                  </div>

                  <div className="col-12 pt-25">
                    <InputText
                      required
                      name={`items[${i}].quantity`}
                      type="text"
                      icon={<Coin size={SIZE_INPUT_ICON}/>}
                      label="Ilo????"
                    />
                  </div>

                  <div className="col-12 pt-25">
                    <InputWarehouseProductShelf
                      name={`items[${i}].shelfId`}
                      warehouseId={warehouseId}
                      productId={items[i].productId}
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
