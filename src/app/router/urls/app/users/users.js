import {BASE_URL} from "app/config/env";

const prefix = `${BASE_URL}/users`;

export const usersRoutes = {
  'app.users': `${prefix}`,
  //,
  'app.user.create': `${prefix}/create`,
  'app.user': (dId = ':userId') => `${prefix}/${dId}`,
  'app.user.edit': (dId = ':userId') => `${prefix}/${dId}/edit`,
}
