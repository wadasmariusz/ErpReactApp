import axios from "axios";
import { BASE_URL_API } from "app/config/env";

export const canceledInterWarehouseRelease = (interWarehouseReleaseId) =>()=>
  axios({
    method: "POST",
    url: `${BASE_URL_API}/v1/inter-warehouse-releases/${interWarehouseReleaseId}/canceled`,
  });
