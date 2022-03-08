import React from "react";
import {InputSelect} from "components/form/special/Select/Input_Select";
import {Box, House} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "app/config/sizes";
import {useCoilsList} from "app/crud/list/useCoilsList";

export const InputCoil = (props) => {

  const {options, isLoading, isFetching} = useCoilsList();

  return (
    <InputSelect
      options={options}
      disabled={isLoading}
      isLoading={isFetching}
      name="productId"
      label="Produkt"
      icon={<Box size={SIZE_INPUT_ICON}/>}
      {...props}
    />
  );
};
