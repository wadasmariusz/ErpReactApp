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
import {InputWarehouse} from "../../../../../components/form/predefined/select/enum/Input_Warehouse";
import CountBy from "underscore/modules/countBy";
import styled from "styled-components";
import {InputProduct} from "../../../../../components/form/predefined/select/enum/Input_Product";
import {InputShelf} from "../../../../../components/form/predefined/select/enum/Input_Shelf";

// import { InputSelect } from "components/form/special/Select/Input_Select";
// import { InputWarehouseReceiptType } from "components/form/predefined/select/enum/Input_WarehouseReceiptType";

export const warehouseReceiptSchema = yup.object().shape({
  name: yup.string().nullable(),
  description: yup.string().nullable()
});

const ColoredLine = styled.div`
  border-bottom: 1px solid grey;
  width: 100%;
`;


export const FormWarehouseReceipt = ({submitText, cancelUrl}) => {
  const [inputList, setInputList] = useState([{productId: "", quantity: "", shelfId: ""}]);

  // handle input change
  const handleInputChange = (e, index) => {
    const {name, value} = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

// handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

// handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { productId: "", quantity: "", shelfId: ""}]);
  };

  return (
    <div className="row">
      <div className="col-12 pt-25">
        <InputWarehouse/>
      </div>

      <div className="col-12 pt-25">
        <h4 className="mt-2">Pozycje:</h4>
      </div>
      {inputList.map((x, i) => {
        return (
          <div key={i} className="col-12">
            <div className="row">
              <div className="col-11">
                <div className="row">
                  <div className="col-12 pt-25">
                    <InputText
                      required
                      name="quantity"
                      type="text"
                      value={x.quantity}
                      icon={<Coin size={SIZE_INPUT_ICON}/>}
                      label="Ilość"
                      onChange={e => handleInputChange(e, i)}
                    />
                  </div>

                  <div className="col-12 pt-25">
                    <InputProduct
                      value={x.productId}
                      onChange={e => handleInputChange(e, i)}
                    />
                  </div>

                  <div className="col-12 pt-25">
                    {/*TODO: jak przekazac warehouseId do pobrania listy półek*/}
                    {/*TODO: onChange nie działa :(*/}
                    <InputShelf
                      value={x.shelfId}
                      onChange={e => handleInputChange(e, i)}
                    />
                  </div>

                  <div className="col-12 py-25">
                    {inputList.length >= 2 &&
                      <ColoredLine/>
                    }
                  </div>
                </div>
              </div>
              <div className="col-1 my-auto">
                {inputList.length !== 1 &&
                  <Button onClick={() => handleRemoveClick(i)} color="danger">
                    <TrashFill className="mr-25" size={SIZE_INPUT_ICON_SM}/>
                  </Button>}
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                {inputList.length - 1 === i &&
                  <Button onClick={handleAddClick} color="primary">
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
