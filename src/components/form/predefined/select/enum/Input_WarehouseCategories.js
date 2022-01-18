import React from "react";
import {useProductCategoriesList} from "app/crud/list/useProductCategoriesList";
import {InputSelectMultiple} from "../../../special/Select/Input_SelectMultiple";

export const InputWarehouseCategories = (props) => {

  const {options, isLoading, isFetching} = useProductCategoriesList();

  return (
    <InputSelectMultiple
      options={options}
      disabled={isLoading}
      isLoading={isFetching}
      name="categoriesId"
      label="Kategorie"
      {...props}
    />

  );
};
