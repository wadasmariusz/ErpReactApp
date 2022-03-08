import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";
import { useOptions } from "app/hooks/crud/useOptions";
import {mapProductToOption} from "app/utility/mapProductToOption";

const getProductsList = () =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/products/list-coil`,
    params: {},
  }).then(({ data }) => data.items);

const useGetCoilsList = () =>
  useQuery2({
    queryKey: ["app.list.products"],
    queryFn: getProductsList,
    isArray: true,
  });

export const useProductsList = () => useOptions(useGetCoilsList, mapProductToOption);
