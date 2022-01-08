import axios from "axios";
import { BASE_URL_API } from "app/config/env";

export const createUserWarehouse = (userId) => (data) =>
  axios({
    method: "POST",
    url: `${BASE_URL_API}/v1/users/${userId}/warehouses`,
    data
  });
