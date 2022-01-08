import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";
import { useOptions } from "app/hooks/crud/useOptions";
import {mapWarehouseToOption} from "app/utility/mapWarehouseToOption";

const getUserWarehousesList = (userId) =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/users/${userId}/warehouses/not-assigned/list`,
    params: {},
  }).then(({ data }) => data.items);

const useGetUserWarehousesList = (userId) =>
  useQuery2({
    queryKey: ["app.list.user.warehouses", userId],
    queryFn: getUserWarehousesList,
    isArray: true,
  });

export const useUserWarehousesList = (userId) => useOptions(useGetUserWarehousesList, mapWarehouseToOption, userId);
