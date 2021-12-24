import React from "react";
import {InputSelect} from "components/form/special/Select/Input_Select";
import {Palette} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "app/config/sizes";
import {usePigeonColors} from "app/crud/enums/usePigeonColors";

export const InputPigeonColor = (props) => {

  const {options, isLoading, isFetching} = usePigeonColors();

  return (
    <InputSelect
      options={options}
      disabled={isLoading}
      isLoading={isFetching}
      name="pigeonColorId"
      label="Kolor"
      icon={<Palette size={SIZE_INPUT_ICON}/>}
      {...props}
    />
  );
};
