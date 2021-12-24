import React from "react";
import {InputSelect} from "components/form/special/Select/Input_Select";
import {Hash} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "app/config/sizes";
import {usePigeonsList} from "app/crud/list/usePigeonsList";

export const InputPigeon = (props) => {

  const {options, isLoading, isFetching} = usePigeonsList();

  return (
    <InputSelect
      options={options}
      disabled={isLoading}
      isLoading={isFetching}
      name="pigeonId"
      label="Gołąb"
      icon={<Hash size={SIZE_INPUT_ICON}/>}
      {...props}
    />
  );
};
