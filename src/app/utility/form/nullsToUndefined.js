/***
 * use in default data, whenever inputs come from API as nulls, instead of undefined
 * if the "field" array is not provided, the function will go through all of the object's keys
 * eg. initial={nullsToEmptyStrings(data)}
 * eg. initial={nullsToEmptyStrings(data, ['position', 'email'])}
 */
export const nullsToUndefined = (data, fields) =>
  (fields ?? Object.keys(data)).reduce(
    (acc, field) => ({
      ...acc,
      [field]: acc?.[field] === null ? undefined : acc?.[field],
    }),
    data,
  );
