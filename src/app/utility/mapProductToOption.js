export const mapProductToOption = ({name, id, quantity}) => ({
  value: id,
  label: `${name} (ilość: ${quantity})`,
})
