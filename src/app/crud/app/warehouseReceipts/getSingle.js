import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";

const getSingle = (warehouseReceiptId) =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/warehouse-receipts/${warehouseReceiptId}`,
  });

export const useGetSingleWarehouseReceipt = (warehouseReceiptId) =>
  useQuery2({
    queryKey: ["app.warehouseReceipt", warehouseReceiptId],
    queryFn: getSingle,
    extractData: ({data}) => data?.data
  });
