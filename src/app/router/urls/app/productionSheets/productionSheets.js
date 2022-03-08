import {BASE_URL} from "app/config/env";

const prefix = `${BASE_URL}/productionSheets`;

export const productionSheetsRoutes = {
  'app.productionSheets': `${prefix}`,
  //,
  'app.productionSheet.create': `${prefix}/create`,
  'app.productionSheet': (dId = ':productionSheetId') => `${prefix}/${dId}`,
  'app.productionSheet.edit': (dId = ':productionSheetId') => `${prefix}/${dId}/edit`,
}
