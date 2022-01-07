import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";

const getSingle = (productCategoryId) =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/product-categories/${productCategoryId}`,
  });

export const useGetSingleProductCategory = (productCategoryId) =>
  useQuery2({
    queryKey: ["app.productCategory", productCategoryId],
    queryFn: getSingle,
    extractData: ({data}) => data?.data
  });
