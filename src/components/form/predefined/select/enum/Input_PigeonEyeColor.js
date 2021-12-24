import React from "react";
import {InputSelect} from "components/form/special/Select/Input_Select";
import {Eye} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "app/config/sizes";
import {usePigeonEyeColors} from "app/crud/enums/usePigeonEyeColors";

export const InputPigeonEyeColor = (props) => {

  const {options, isLoading, isFetching} = usePigeonEyeColors();

  return (
    <InputSelect
      options={options}
      disabled={isLoading}
      isLoading={isFetching}
      name="pigeonEyeColorId"
      label="Kolor oczu"
      icon={<Eye size={SIZE_INPUT_ICON}/>}
      {...props}
    />
  );
};
