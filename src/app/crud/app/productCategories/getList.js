import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import { usePaginatedQuery2 } from "app/hooks/crud/usePaginatedQuery2";

const getList = ({ page, perPage }, []) =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/product-categories`,
    params: {
      CurrentPage: page,
      PerPage: perPage,
    },
  });

export const useGetProductCategories = () =>
  usePaginatedQuery2({
    queryKey: ["app.productCategories"],
    queryFn: getList,
    extractData: data => data?.data?.items
  });
