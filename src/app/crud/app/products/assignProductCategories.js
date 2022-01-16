import axios from "axios";
import {BASE_URL_API} from "app/config/env";

export const assignProductCategories = (productId) => (data) => axios({
  method: 'POST',
  url: `${BASE_URL_API}/v1/products/${productId}/categories`,
  data,
});
