import React from "react";
import {InputSelect} from "components/form/special/Select/Input_Select";
import {Box, House} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "app/config/sizes";
import {useProductsList} from "app/crud/list/useProductsList";

export const InputProduct = (props) => {

  const {options, isLoading, isFetching} = useProductsList();

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
