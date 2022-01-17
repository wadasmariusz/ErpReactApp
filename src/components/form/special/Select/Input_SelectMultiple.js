import React from 'react';
import {useFieldArray, useFormContext} from "react-hook-form";
import {FormGroup, Label} from "reactstrap";
import Select from "react-select";
import * as classnames from "classnames";
import {customStyles, findMultipleOptions} from "app/utility/form/select";

export const InputSelectMultiple = ({
                                      name = null,
                                      label = null,
                                      placeholder: passedPlaceholder,
                                      icon = null,
                                      className = '',
                                      optionFormat,
                                      options,
                                      max = 100,
                                      required,
                                      ...props
                                    }) => {

  const placeholder = passedPlaceholder ?? `${label ?? ''}${required ? '*' : ''}`;
  const {register, control} = useFormContext();
  const {fields, append, remove,} = useFieldArray({control, name});

  const handleChange = (allOptions, {option, action, removedValue}) => {
    console.log(allOptions, {option, action, removedValue})
    if (action === 'select-option') {
      if (fields.length < max) {
        append({value: option?.value});
      }
    } else if (action === 'remove-value') {
      if (removedValue?.value) {
        // noinspection EqualityComparisonWithCoercionJS
        const indexToRemove = fields?.findIndex(({value}) => value == removedValue?.value);
        if (indexToRemove !== -1) {
          remove(indexToRemove);
        } else {
          console.error('Cannot remove value. value not exist');
        }
      } else {
        console.error('Cannot remove value'); //TODO: add error message to user
      }
    }
  }

  return (
    <FormGroup
      className={
        classnames({
          'form-label-group mt-50 position-relative has-icon-left': true,
          className: true,
          // 'force-input-has-value': !!value || value===0,
        })
      }
    >
      <Select
        styles={customStyles({hasPaddingLeft: false})}
        value={findMultipleOptions(fields, options)}
        options={options}
        formatOptionLabel={optionFormat}
        placeholder={placeholder}
        onChange={handleChange}
        isMulti
        {...props}
        icon={null}
        isClearable={false}
      />
      <div className="form-control-position">
        {!fields?.length && icon}
      </div>
      <Label>
        {label}
        {required && <span className="text-danger">*</span>}
      </Label>
      {fields && fields.map(({id, value}, index) => (
        <input key={id} type="hidden" {...register(`${name}[${index}]`)} value={value} />
      ))}
    </FormGroup>
  );
};
