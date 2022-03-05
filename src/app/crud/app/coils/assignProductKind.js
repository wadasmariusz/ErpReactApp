import axios from "axios";
import {BASE_URL_API} from "app/config/env";

export const assignProductKind = (productId) => (data) => axios({
  method: 'PUT',
  url: `${BASE_URL_API}/v1/products/${productId}/product-kind`,
  data,
});
