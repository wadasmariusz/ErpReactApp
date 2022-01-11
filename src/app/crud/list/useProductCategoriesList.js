import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";
import { useOptions } from "app/hooks/crud/useOptions";
import {mapProductToOption} from "app/utility/mapProductToOption";

const getProductCategoriesList = () =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/product-categories/list`,
    params: {},
  }).then(({ data }) => data.items);

const useGetProductKindsList = () =>
  useQuery2({
    queryKey: ["app.list.productCategories"],
    queryFn: getProductCategoriesList,
    isArray: true,
  });

export const useProductCategoriesList = () => useOptions(useGetProductKindsList, mapProductToOption);
