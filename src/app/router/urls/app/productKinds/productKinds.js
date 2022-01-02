import {BASE_URL} from "app/config/env";

const prefix = `${BASE_URL}/product-kinds`;

export const productKindsRoutes = {
  'app.productKinds': `${prefix}`,
  //,
  'app.productKind.create': `${prefix}/create`,
  'app.productKind': (dId = ':productKindId') => `${prefix}/${dId}`,
  'app.productKind.edit': (dId = ':productKindId') => `${prefix}/${dId}/edit`,
}
