﻿import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";
import { useOptions } from "app/hooks/crud/useOptions";
import {mapProductToOption} from "app/utility/mapProductToOption";

const getWarehouseProductShelvesList = (warehouseId, productId) =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/warehouses/${warehouseId}/products/${productId}/shelves/list`,
    params: {},
  }).then(({ data }) => data.items);

const useGetWarehouseProductShelvesList = (warehouseId, productId) => useQuery2({
    queryKey: ['app.list.warehouse.product.shelves', warehouseId, productId],
    queryFn: getWarehouseProductShelvesList,
    isArray: true,
  });

export const useWarehouseProductShelvesList = (warehouseId, productId) => useOptions(useGetWarehouseProductShelvesList, mapProductToOption, [warehouseId, productId]);
