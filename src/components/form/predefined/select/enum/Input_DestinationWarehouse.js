import React from "react";
import {InputSelect} from "components/form/special/Select/Input_Select";
import {House} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "app/config/sizes";
import {useWarehousesList} from "app/crud/list/useWarehousesList";

export const InputDestinationWarehouse = (props) => {

  const {options, isLoading, isFetching} = useWarehousesList();

  return (
    <InputSelect
      options={options}
      disabled={isLoading}
      isLoading={isFetching}
      name="destinationWarehouseId"
      label="Magazyn docelowy"
      icon={<House size={SIZE_INPUT_ICON}/>}
      {...props}
    />

  );
};
