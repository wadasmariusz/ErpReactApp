import axios from "axios";
import {BASE_URL_API} from "app/config/env";

export const updateInterWarehouseReceipt = (interWarehouseReceiptId) => (data) => axios({
  method: 'PUT',
  url: `${BASE_URL_API}/v1/inter-warehouse-receipts/${interWarehouseReceiptId}`,
  data,
});
