import React from 'react';
import {InputSelectPure} from "components/form/special/Select/Input_Select.pure";
import {Controller, useFormContext} from "react-hook-form";

export const InputSelect = ({options, disabled, name, placeholder, label, isLoading, ...props}) => {

  const {control, register, setValue} = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={(
        {
          field:{ref, value, onChange, ...field},
          fieldState
        },
      ) => {
        const {error} = fieldState;
        const handleChange = (props) => {
          onChange(props);
          // setValue(`${name}Id`, props.value);
        }
        return (
          <>
            {/*<input type="hidden" {...register(`${name}Id`)}/>*/}
            <InputSelectPure
              placeholder={placeholder}
              label={label}
              error={error}
              innerRef={ref}
              options={options}
              // onChange={handleChange}
              onChange={(option)=>onChange(option?.value)}
              disabled={disabled}
              value={value}
              isLoading={isLoading}
              {...props}
              {...field}
            />
          </>
        )
      }}
    />
  );
}
