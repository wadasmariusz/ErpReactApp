import axios from "axios";
import { BASE_URL_API } from "app/config/env";

export const removeWarehouseAccess = (userId, warehouseId) => () =>
  axios({
    method: "DELETE",
    url: `${BASE_URL_API}/v1/users/${userId}/warehouses/${warehouseId}`,
  });
