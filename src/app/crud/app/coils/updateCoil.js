import axios from "axios";
import {BASE_URL_API} from "app/config/env";

export const updateCoil = (productId) => (data) => axios({
  method: 'PUT',
  url: `${BASE_URL_API}/v1/coils/${productId}`,
  data,
});
