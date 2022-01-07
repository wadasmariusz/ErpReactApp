import axios from "axios";
import {BASE_URL_API} from "app/config/env";

export const updateProductCategory = (productCategoryId) => (data) => axios({
  method: 'PUT',
  url: `${BASE_URL_API}/v1/product-categories/${productCategoryId}`,
  data,
});
