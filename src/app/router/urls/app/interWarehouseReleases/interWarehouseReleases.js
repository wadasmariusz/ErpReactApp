import {BASE_URL} from "app/config/env";

const prefix = `${BASE_URL}/interWarehouseReleases`;

export const interWarehouseReleasesRoutes = {
  'app.interWarehouseReleases': `${prefix}`,
  //,
  'app.interWarehouseRelease.create': `${prefix}/create`,
  'app.interWarehouseRelease': (dId = ':interWarehouseReleaseId') => `${prefix}/${dId}`,
  'app.interWarehouseRelease.edit': (dId = ':interWarehouseReleaseId') => `${prefix}/${dId}/edit`,
}
