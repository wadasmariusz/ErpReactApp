import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";
import { useOptions } from "app/hooks/crud/useOptions";
import {mapProductToOption} from "app/utility/mapProductToOption";
import {mapProductWithQuantityToOption} from "../../utility/mapProductWithQuantityToOption";

const getWarehouseProductsList = (warehouseId) =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/warehouses/${warehouseId}/products/list`,
    params: {},
  }).then(({ data }) => data.items);

const useGetWarehouseProductsList = (warehouseId) =>
  useQuery2({
    queryKey: ["app.list.warehouse.products", warehouseId],
    queryFn: getWarehouseProductsList,
    isArray: true,
  });

export const useWarehouseProductsList = (warehouseId) => useOptions(useGetWarehouseProductsList, mapProductWithQuantityToOption, [warehouseId]);
