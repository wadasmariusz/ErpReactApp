import {BASE_URL} from "app/config/env";

const prefix = `${BASE_URL}/pigeons`;

export const pigeonsRoutes = {
  'app.pigeons': `${prefix}`,
  //,
  'app.pigeon.create': `${prefix}/create`,
  'app.pigeon': (pId = ':pigeonId') => `${prefix}/${pId}`,
  'app.pigeon.edit': (pId = ':pigeonId') => `${prefix}/${pId}/edit`,
}
