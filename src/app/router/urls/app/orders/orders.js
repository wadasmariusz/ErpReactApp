import {BASE_URL} from "app/config/env";

const prefix = `${BASE_URL}/orders`;

export const ordersRoutes = {
  'app.orders': `${prefix}`,
  //,
  'app.order.create': `${prefix}/create`,
  'app.order': (dId = ':orderId') => `${prefix}/${dId}`,
  'app.order.edit': (dId = ':orderId') => `${prefix}/${dId}/edit`,
}
