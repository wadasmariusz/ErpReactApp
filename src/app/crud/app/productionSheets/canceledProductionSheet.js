import axios from "axios";
import { BASE_URL_API } from "app/config/env";

export const canceledProductionSheet = (productionSheetId) =>()=>
  axios({
    method: "POST",
    url: `${BASE_URL_API}/v1/production-sheets/${productionSheetId}/canceled`,
  });
