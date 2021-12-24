import React from "react";
import {InputSelect} from "components/form/special/Select/Input_Select";
import {InfoCircle} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "app/config/sizes";
import {usePigeonStatuses} from "app/crud/enums/usePigeonStatuses";

export const InputPigeonStatus = (props) => {

  const {options, isLoading, isFetching} = usePigeonStatuses();

  return (
    <InputSelect
      options={options}
      disabled={isLoading}
      isLoading={isFetching}
      name="status"
      label="Status"
      icon={<InfoCircle size={SIZE_INPUT_ICON}/>}
      {...props}
    />
  );
};
