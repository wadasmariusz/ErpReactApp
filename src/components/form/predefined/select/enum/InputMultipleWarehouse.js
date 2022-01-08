import React from "react";
import {InputSelect} from "components/form/special/Select/Input_Select";
import {House} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "app/config/sizes";
import {useUserWarehousesList} from "../../../../../app/crud/list/useUserWarehousesList";

export const InputMultipleWarehouse = (props) => {

  const {options, isLoading, isFetching} = useUserWarehousesList(props.userId);

  return (
    <InputSelect
      options={options}
      disabled={isLoading}
      isLoading={isFetching}
      name="warehouseId"
      label="Magazyn"
      icon={<House size={SIZE_INPUT_ICON}/>}
      {...props}
    />
  );
};
