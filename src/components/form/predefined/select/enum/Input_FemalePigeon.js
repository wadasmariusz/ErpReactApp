import React from "react";
import {InputSelect} from "components/form/special/Select/Input_Select";
import {InfoCircle} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "app/config/sizes";
import {useFemalePigeonsList} from "app/crud/list/useFemalePigeonsList";

export const InputFemalePigeon = (props) => {

  const {options, isLoading, isFetching} = useFemalePigeonsList();

  return (
    <InputSelect
      options={options}
      disabled={isLoading}
      isLoading={isFetching}
      name="femalePigeonId"
      label="Matka"
      icon={<InfoCircle size={SIZE_INPUT_ICON}/>}
      {...props}
    />
  );
};
