import {BASE_URL} from "app/config/env";

const prefix = `${BASE_URL}/warehouseReleases`;

export const warehouseReleasesRoutes = {
  'app.warehouseReleases': `${prefix}`,
  //,
  'app.warehouseRelease.create': `${prefix}/create`,
  'app.warehouseRelease': (dId = ':warehouseReleaseId') => `${prefix}/${dId}`,
  'app.warehouseRelease.edit': (dId = ':warehouseReleaseId') => `${prefix}/${dId}/edit`,
}
