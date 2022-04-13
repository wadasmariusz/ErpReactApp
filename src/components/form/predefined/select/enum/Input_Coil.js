import React from "react";
import {InputSelect} from "components/form/special/Select/Input_Select";
import {Circle} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "app/config/sizes";
import {useCoilsList} from "app/crud/list/useCoilList";

export const InputCoil = (props) => {

  const {options, isLoading, isFetching} = useCoilsList();

  return (
    <InputSelect
      options={options}
      disabled={isLoading}
      isLoading={isFetching}
      name="coilId"
      label="Krąg"
      icon={<Circle size={SIZE_INPUT_ICON}/>}
      {...props}
    />
  );
};
