import {BASE_URL} from "app/config/env";

const prefix = `${BASE_URL}/coils`;

export const coilsRoutes = {
  'app.coils': `${prefix}`,
  //,
  'app.coil.create': `${prefix}/create`,
  'app.coil': (dId = ':productId') => `${prefix}/${dId}`,
  'app.coil.edit': (dId = ':productId') => `${prefix}/${dId}/edit`,
}
