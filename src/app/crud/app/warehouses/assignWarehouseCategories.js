import axios from "axios";
import {BASE_URL_API} from "app/config/env";

export const assignWarehouseCategories = (warehouseId) => (data) => axios({
  method: 'POST',
  url: `${BASE_URL_API}/v1/warehouses/${warehouseId}/categories`,
  data:{
    ...data,
    categoriesId: data?.categoriesId.map(({value}) => value)
  },
});
