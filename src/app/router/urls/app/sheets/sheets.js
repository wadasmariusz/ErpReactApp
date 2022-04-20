import {BASE_URL} from "app/config/env";

const prefix = `${BASE_URL}/sheets`;

export const sheetsRoutes = {
  'app.sheets': `${prefix}`,
  'app.sheet': (dId = ':sheetId') => `${prefix}/${dId}`,
}
