export const errorHandler = ({details, json, got, expected, file}) => {
  console.error({error:'MISSING ERROR HANDLER', details, got, expected, file, json});
  return true;
}
