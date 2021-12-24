import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";
import { useOptions } from "app/hooks/crud/useOptions";

const getWarehouseTypes = () =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/list/warehouse-types`,
    params: {},
  }).then(({ data }) => data.items);

const useGetWarehouseTypes = () =>
  useQuery2({
    queryKey: ["app.list.pigeonColors"],
    queryFn: getWarehouseTypes,
    isArray: true,
  });

export const useWarehouseTypes = () => useOptions(useGetWarehouseTypes);
