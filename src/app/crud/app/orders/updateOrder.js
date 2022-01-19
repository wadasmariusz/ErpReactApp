import axios from "axios";
import {BASE_URL_API} from "app/config/env";

export const updateOrder = (orderId) => (data) => axios({
  method: 'PUT',
  url: `${BASE_URL_API}/v1/orders/${orderId}`,
  data,
});
