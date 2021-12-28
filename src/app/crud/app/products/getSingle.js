import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";

const getSingle = (productId) =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/products/${productId}`,
  });

export const useGetSingleProduct = (productId) =>
  useQuery2({
    queryKey: ["app.product", productId],
    queryFn: getSingle,
    extractData: ({data}) => data?.data
  });
