import {BASE_URL} from "app/config/env";

const prefix = `${BASE_URL}/warehouses`;

export const warehousesRoutes = {
  'app.warehouses': `${prefix}`,
  //,
  'app.warehouse.create': `${prefix}/create`,
  'app.warehouse': (dId = ':warehouseId') => `${prefix}/${dId}`,
  'app.warehouse.edit': (dId = ':warehouseId') => `${prefix}/${dId}/edit`,
  'app.warehouse.shelf.edit': (wId = ':warehouseId', sId = ':shelfId') => `${prefix}/${wId}/shelves/${sId}/edit`,
  'app.warehouse.receipt.create': (dId = ':warehouseId') => `${prefix}/${dId}/create-receipt`,
  'app.warehouse.release.create': (dId = ':warehouseId') => `${prefix}/${dId}/create-release`,

}
