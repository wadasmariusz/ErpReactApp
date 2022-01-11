import React from "react";
import {House} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "app/config/sizes";
import {useProductKindsList} from "app/crud/list/useProductKindsList";
import {InputSelectPure} from "../../../special/Select/Input_Select.pure";

export const InputProductKindPure = (props) => {

  const {options, isLoading, isFetching} = useProductKindsList();

  return (
    <InputSelectPure
      options={options}
      disabled={isLoading}
      isLoading={isFetching}
      label="Rodzaj"
      icon={<House size={SIZE_INPUT_ICON}/>}
      {...props}
    />

  );
};
