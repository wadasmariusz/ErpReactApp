import React from "react";
import {InputSelect} from "components/form/special/Select/Input_Select";
import {Bookshelf, Box, House} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "app/config/sizes";
import {useShelvesList} from "app/crud/list/useShelvesList";
import {useWarehouseProductShelvesList} from "../../../../../app/crud/list/useWarehouseProductShelves";

export const InputSourceShelf = (props) => {
  const {options, isLoading, isFetching} = useWarehouseProductShelvesList(props.sourceWarehouseId, props.productId);

  return (
    <InputSelect
      options={options}
      disabled={isLoading}
      isLoading={isFetching}
      name="sourceShelfId"
      label="Półka zródłowa"
      icon={<Bookshelf size={SIZE_INPUT_ICON}/>}
      defaultValue = { options?.length === 1 && options[0]?.value }
      {...props}
    />
  );
};
