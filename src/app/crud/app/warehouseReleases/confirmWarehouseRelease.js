import axios from "axios";
import { BASE_URL_API } from "app/config/env";

export const confirmWarehouseRelease = (warehouseReleaseId) =>()=>
  axios({
    method: "POST",
    url: `${BASE_URL_API}/v1/warehouse-releases/${warehouseReleaseId}/confirm`,
  });
