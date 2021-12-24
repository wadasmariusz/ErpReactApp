import React from "react";
import { InputSelect } from "components/form/special/Select/Input_Select";
import { Folder } from "react-bootstrap-icons";
import { SIZE_INPUT_ICON } from "app/config/sizes";
import { useWarehouseTypes } from "app/crud/enums/useWarehouseTypes";

export const InputWarehouseType = (props) => {
  const { options, isLoading, isFetching } = useWarehouseTypes();

  return (
    <InputSelect
      options={options}
      disabled={isLoading}
      isLoading={isFetching}
      name="type"
      label="Typ"
      icon={<Folder size={SIZE_INPUT_ICON} />}
      {...props}
    />
  );
};
