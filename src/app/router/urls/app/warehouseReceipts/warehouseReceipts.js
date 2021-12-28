import {BASE_URL} from "app/config/env";

const prefix = `${BASE_URL}/warehouseReceipts`;

export const warehouseReceiptsRoutes = {
  'app.warehouseReceipts': `${prefix}`,
  //,
  'app.warehouseReceipt.create': `${prefix}/create`,
  'app.warehouseReceipt': (dId = ':warehouseReceiptId') => `${prefix}/${dId}`,
  'app.warehouseReceipt.edit': (dId = ':warehouseReceiptId') => `${prefix}/${dId}/edit`,
}
