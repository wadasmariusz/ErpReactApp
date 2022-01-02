import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";

const getSingle = (productKindId) =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/product-kinds/${productKindId}`,
  });

export const useGetSingleProductKind = (productKindId) =>
  useQuery2({
    queryKey: ["app.productKind", productKindId],
    queryFn: getSingle,
    extractData: ({data}) => data?.data
  });
