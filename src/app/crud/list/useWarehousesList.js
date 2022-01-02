import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";
import { useOptions } from "app/hooks/crud/useOptions";
import {mapWarehouseToOption} from "app/utility/mapWarehouseToOption";

const getWarehousesList = () =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/warehouses/list`,
    params: {},
  }).then(({ data }) => data.items);

const useGetWarehousesList = () =>
  useQuery2({
    queryKey: ["app.list.warehouses"],
    queryFn: getWarehousesList,
    isArray: true,
  });

export const useWarehousesList = () => useOptions(useGetWarehousesList, mapWarehouseToOption);
