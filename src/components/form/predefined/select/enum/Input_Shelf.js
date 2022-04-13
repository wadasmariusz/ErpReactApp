import React, {useEffect} from "react";
import {InputSelect} from "components/form/special/Select/Input_Select";
import {Bookshelf} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "app/config/sizes";
import {useShelvesList} from "app/crud/list/useShelvesList";
import {useFormContext} from "react-hook-form";

export const InputShelf = ({warehouseId, name, ...props}) => {
  const {options, isLoading, isFetching} = useShelvesList(warehouseId);
  const {setValue} = useFormContext();
  useEffect(() => {
    // zawsze pierwsze jako domyślne, do zastąpienia
    // ifem pod spodem jak chcecie tylko przy jednej półce
    setValue(name, options[0]?.value)
    // if (options?.length === 1) {
    //   setValue(name, options[0]?.value)
    // }
  }, [options.length, warehouseId])

  return (
    <InputSelect
      options={options}
      disabled={isLoading}
      isLoading={isFetching}
      name={name}
      label="Półka"
      icon={<Bookshelf size={SIZE_INPUT_ICON}/>}
      {...props}
    />
  );
};
