export const findOption = (value, options) => {
  if (!value) return null;
  let option = null;
  const a = options?.forEach((item) => {
    if(option) return;
    if (item?.options) findOption(value, item.options);
    if(item?.value?.toString() === value)
      option = item;
  });
  return option;
}

export const findMultipleOptions = (values, options) => {
  let selected = [];
  const a = options?.forEach((item) => {
    if (item?.options) findOption(values, item.options);
    if(values?.map(({value})=> value?.toString()).indexOf(item?.value?.toString()) !== -1)
      selected.push(item);
  });
  return selected;

}

export const customStyles = ({hasPaddingLeft=true, customFontSize='0.96rem'} = {}) => ({
  control: (provided, {isFocused}) => ({
    ...provided,
    boxShadow: isFocused ? '0 3px 10px 0 rgba(0, 0, 0, 0.15)' : 'none',
    borderColor: isFocused ? '#436eb3 !important' : provided.borderColor,
    borderWidth: '1px !important',
    outline: 'none',
  }),
  singleValue: (provided) => ({
    ...provided,
    marginLeft: hasPaddingLeft?'2.3rem':provided?.paddingLeft ?? '0',
    fontSize: customFontSize,
  }),
  placeholder: (provided, {isFocused}) => ({
    ...provided,
    paddingLeft:  hasPaddingLeft?'2.3rem':provided?.paddingLeft ?? '0',
    fontSize: '0.85rem',
    color: isFocused ? '#000' : 'rgba(34, 41, 47, 0.4)',
    transition: 'all 0.2s ease',
  }),
  input: (provided) => ({
    ...provided,
    paddingLeft:  hasPaddingLeft?'2.3rem':provided?.paddingLeft ?? '0',
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: '5',
  }),
});
