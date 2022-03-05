import {BASE_URL} from "app/config/env";

const prefix = `${BASE_URL}/interWarehouseReceipts`;

export const interWarehouseReceiptsRoutes = {
  'app.interWarehouseReceipts': `${prefix}`,
  //,
  'app.interWarehouseReceipt.create': `${prefix}/create`,
  'app.interWarehouseReceipt': (dId = ':interWarehouseReceiptId') => `${prefix}/${dId}`,
  'app.interWarehouseReceipt.edit': (dId = ':interWarehouseReceiptId') => `${prefix}/${dId}/edit`,
}
