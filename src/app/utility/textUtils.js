export const threeDotsCenterName = (name, maxLength = 20) => {
  if (!name) return "";
  if (name?.length <= maxLength) {
    return name;
  }
  if (name?.length > maxLength - 3 && name?.substr) {
    console.log(name, name.length, maxLength);
    const chars = Math.round((maxLength - 3) / 2);
    return name.substr(0, chars) + "..." + name.substr(-chars);
  }
  return null;
};

export const dashIfNoData = (text) => text ?? "-";
