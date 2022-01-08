import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";
import { useOptions } from "app/hooks/crud/useOptions";
import {mapProductToOption} from "app/utility/mapProductToOption";

const getProductKindsList = () =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/product-kinds/list`,
    params: {},
  }).then(({ data }) => data.items);

const useGetProductKindsList = () =>
  useQuery2({
    queryKey: ["app.list.productKinds"],
    queryFn: getProductKindsList,
    isArray: true,
  });

export const useProductKindsList = () => useOptions(useGetProductKindsList, mapProductToOption);
