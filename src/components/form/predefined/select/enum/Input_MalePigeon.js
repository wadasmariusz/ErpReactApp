import React from "react";
import {InputSelect} from "components/form/special/Select/Input_Select";
import {InfoCircle} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "app/config/sizes";
import {useMalePigeonsList} from "app/crud/list/useMalePigeonsList";

export const InputMalePigeon = (props) => {

  const {options, isLoading, isFetching} = useMalePigeonsList();

  return (
    <InputSelect
      options={options}
      disabled={isLoading}
      isLoading={isFetching}
      name="malePigeonId"
      label="Ojciec"
      icon={<InfoCircle size={SIZE_INPUT_ICON}/>}
      {...props}
    />
  );
};
