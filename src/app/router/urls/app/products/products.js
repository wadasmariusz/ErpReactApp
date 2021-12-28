import {BASE_URL} from "app/config/env";

const prefix = `${BASE_URL}/products`;

export const productsRoutes = {
  'app.products': `${prefix}`,
  //,
  'app.product.create': `${prefix}/create`,
  'app.product': (dId = ':productId') => `${prefix}/${dId}`,
  'app.product.edit': (dId = ':productId') => `${prefix}/${dId}/edit`,
}
