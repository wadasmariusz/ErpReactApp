import React from "react";
import {House} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "app/config/sizes";
import {InputSelectPure} from "../../../special/Select/Input_Select.pure";
import {useProductCategoriesList} from "../../../../../app/crud/list/useProductCategoriesList";

export const InputProductCategoryPure = (props) => {

  const {options, isLoading, isFetching} = useProductCategoriesList();

  return (
    <InputSelectPure
      options={options}
      disabled={isLoading}
      isLoading={isFetching}
      label="Kategoria"
      icon={<House size={SIZE_INPUT_ICON}/>}
      {...props}
    />

  );
};
