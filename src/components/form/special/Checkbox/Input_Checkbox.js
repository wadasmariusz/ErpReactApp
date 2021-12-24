import React from 'react';
import {Controller, useFormContext} from "react-hook-form";
import {InputCheckboxPure} from "components/form/special/Checkbox/Input_Checkbox.pure";

export const InputCheckbox = ({label, name, innerRef, ...props}) => {

  const {control} = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={(
        {
          field:{ref, ...field},
          fieldState
        },
      ) => {
        const {error} = fieldState;
        return (
          <InputCheckboxPure
            name={name}
            label={label}
            error={error}
            {...field}
            {...props}
          />
        )
      }}
    />
  );
};
