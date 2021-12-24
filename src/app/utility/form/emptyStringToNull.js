export const emptyStringToNull = (value, originalValue) => (originalValue==='' ? null : value);

// YUP helper
//
// example:
// yup.number().transform((value, originalValue) => (originalValue==='' ? null : value)).required(),
// replace with:
// yup.number().transform(emptyStringToNull).required(),
