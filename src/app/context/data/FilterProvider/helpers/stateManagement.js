import qs from "qs";

export const paramsToSearch = (params) => {
  try {
    const search = qs.stringify(params);
    if(search) return `?${search}`;
    return '';
  } catch (e) {
    return '';
  }
}
