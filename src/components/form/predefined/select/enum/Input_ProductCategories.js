import React from "react";
import {InputSelect} from "components/form/special/Select/Input_Select";
import {Tags} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "app/config/sizes";
import {useProductCategoriesList} from "app/crud/list/useProductCategoriesList";

export const InputProductCategories = (props) => {

  const {options, isLoading, isFetching} = useProductCategoriesList();

  return (
    <InputSelect
      options={options}
      disabled={isLoading}
      isLoading={isFetching}
      name="categoriesId"
      label="Kategorie"
      icon={<Tags size={SIZE_INPUT_ICON}/>}
      {...props}
    />

  );
};
