import React from "react";
import {InputSelect} from "components/form/special/Select/Input_Select";
import {House} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "app/config/sizes";
import {useProductKindsList} from "app/crud/list/useProductKindsList";

export const InputProductKind = (props) => {

  const {options, isLoading, isFetching} = useProductKindsList();

  return (
    <InputSelect
      options={options}
      disabled={isLoading}
      isLoading={isFetching}
      name="productKindId"
      label="Rodzaj"
      icon={<House size={SIZE_INPUT_ICON}/>}
      {...props}
    />

  );
};
