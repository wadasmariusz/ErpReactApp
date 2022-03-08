import axios from "axios";
import {BASE_URL_API} from "app/config/env";

export const updateProductionSheet = (productionSheetId) => (data) => axios({
  method: 'PUT',
  url: `${BASE_URL_API}/v1/production-sheets/${productionSheetId}`,
  data,
});
