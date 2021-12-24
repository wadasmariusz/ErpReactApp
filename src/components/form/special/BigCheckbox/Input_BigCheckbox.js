import React from 'react';
import {Controller, useFormContext} from "react-hook-form";
import {InputBigCheckboxPure} from "components/form/special/BigCheckbox/Input_BigCheckbox.pure";

export const InputBigCheckbox = ({label, name, innerRef, ...props}) => {

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
          <InputBigCheckboxPure
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
