import React from "react";
import {InputSelect} from "components/form/special/Select/Input_Select";
import {GenderAmbiguous} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "app/config/sizes";
import {usePigeonGenders} from "app/crud/enums/usePigeonGenders";

export const InputPigeonGender = (props) => {

  const {options, isLoading, isFetching} = usePigeonGenders();

  return (
    <InputSelect
      options={options}
      disabled={isLoading}
      isLoading={isFetching}
      name="gender"
      label="Płeć"
      icon={<GenderAmbiguous size={SIZE_INPUT_ICON}/>}
      {...props}
    />
  );
};
