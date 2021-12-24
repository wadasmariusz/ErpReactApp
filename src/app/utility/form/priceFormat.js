export const priceFormat = (value, originalValue) => {
  // console.log(value, originalValue, (parseInt((parseFloat(originalValue.replaceAll(',','.'))*100)+'')/100))
  return (parseInt((parseFloat(originalValue.replaceAll(',','.'))*100)+'')/100);
}
