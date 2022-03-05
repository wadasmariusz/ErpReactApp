import axios from "axios";
import {BASE_URL_API} from "app/config/env";

export const updateInterWarehouseRelease = (interWarehouseReleaseId) => (data) => axios({
  method: 'PUT',
  url: `${BASE_URL_API}/v1/inter-warehouse-releases/${interWarehouseReleaseId}`,
  data,
});
