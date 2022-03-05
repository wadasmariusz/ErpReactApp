import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";

const getSingle = (interWarehouseReceiptId) =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/inter-warehouse-receipts/${interWarehouseReceiptId}`,
  });

export const useGetSingleInterWarehouseReceipt = (interWarehouseReceiptId) =>
  useQuery2({
    queryKey: ["app.interWarehouseReceipt", interWarehouseReceiptId],
    queryFn: getSingle,
    extractData: ({data}) => data?.data
  });
