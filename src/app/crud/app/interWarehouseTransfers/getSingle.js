import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";

const getSingle = (interWarehouseTransferId) =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/inter-warehouse-transfers/${interWarehouseTransferId}`,
  });

export const useGetSingleInterWarehouseTransfer = (interWarehouseTransferId) =>
  useQuery2({
    queryKey: ["app.interWarehouseTransfer", interWarehouseTransferId],
    queryFn: getSingle,
    extractData: ({data}) => data?.data
  });
