import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";

const getSingle = (orderId) =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/orders/${orderId}`,
  });

export const useGetSingleOrder = (orderId) =>
  useQuery2({
    queryKey: ["app.order", orderId],
    queryFn: getSingle,
    extractData: ({data}) => data?.data
  });
