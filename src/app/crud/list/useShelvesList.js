import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";
import { useOptions } from "app/hooks/crud/useOptions";
import {mapShelfToOption} from "app/utility/mapShelfToOption";

const getShelvesList = (warehouseId) => () =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/warehouses/${warehouseId}/shelves/list`,
    // url: `${BASE_URL_API}/v1/warehouses/1/shelves/list`,
    params: {},
  }).then(({ data }) => data.items);

const useGetShelvesList = (warehouseId) =>
  useQuery2({
    queryKey: ["app.list.shelves", warehouseId],
    queryFn: getShelvesList(warehouseId),
    isArray: true,
  });

export const useShelvesList = (warehouseId) => useOptions(useGetShelvesList, mapShelfToOption, [warehouseId]);
