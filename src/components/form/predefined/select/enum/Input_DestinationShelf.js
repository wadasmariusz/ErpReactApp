import React from "react";
import {InputSelect} from "components/form/special/Select/Input_Select";
import {Bookshelf, Box, House} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "app/config/sizes";
import {useShelvesList} from "app/crud/list/useShelvesList";

export const InputDestinationShelf = (props) => {
  const {options, isLoading, isFetching} = useShelvesList(props.destinationWarehouseId);

  return (
    <InputSelect
      options={options}
      disabled={isLoading}
      isLoading={isFetching}
      name="destinationShelfId"
      label="Półka docelowa"
      icon={<Bookshelf size={SIZE_INPUT_ICON}/>}
      {...props}
    />
  );
};
