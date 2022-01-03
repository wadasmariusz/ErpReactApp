import {BASE_URL} from "app/config/env";

const prefix = `${BASE_URL}/interWarehouseTransfers`;

export const interWarehouseTransfersRoutes = {
  'app.interWarehouseTransfers': `${prefix}`,
  //,
  'app.interWarehouseTransfer.create': `${prefix}/create`,
  'app.interWarehouseTransfer': (dId = ':interWarehouseTransferId') => `${prefix}/${dId}`,
  'app.interWarehouseTransfer.edit': (dId = ':interWarehouseTransferId') => `${prefix}/${dId}/edit`,
}
