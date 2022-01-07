export const mapProductWithQuantityToOption = ({name, id, quantity}) => ({
  value: id,
  label: `${name} (ilość: ${quantity})`,
})
