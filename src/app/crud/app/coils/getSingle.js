import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";

const getSingle = (productId) =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/coils/${productId}`,
  });

export const useGetSingleCoil = (productId) =>
  useQuery2({
    queryKey: ["app.coil", productId],
    queryFn: getSingle,
    extractData: ({data}) => data?.data
  });
