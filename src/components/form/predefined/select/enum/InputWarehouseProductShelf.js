import React from "react";
import {InputSelect} from "components/form/special/Select/Input_Select";
import {Bookshelf, Box, House} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "app/config/sizes";
import {useWarehouseProductShelvesList} from "../../../../../app/crud/list/useWarehouseProductShelves";

export const InputWarehouseProductShelf = (props) => {

  const {options, isLoading, isFetching} = useWarehouseProductShelvesList(props.warehouseId, props.productId);

  return (
    <InputSelect
      options={options}
      disabled={isLoading}
      isLoading={isFetching}
      name="shelfId"
      label="Półka"
      icon={<Bookshelf size={SIZE_INPUT_ICON}/>}
      defaultValue = { options?.length === 1 && options[0]?.value }
      {...props}
    />
  );
};
