import {BASE_URL} from "app/config/env";
import {authRoutes} from "app/router/urls/common/auth";
import {publicRoutes} from "app/router/urls/common/publicRoutes";
import {pigeonsRoutes} from "app/router/urls/app/pigeons/pigeons";
import {warehousesRoutes} from "app/router/urls/app/warehouses/warehouses";
import {warehouseReceiptsRoutes} from "app/router/urls/app/warehouseReceipts/warehouseReceipts";
import {productsRoutes} from "app/router/urls/app/products/products";
import {dashboardRoutes} from "app/router/urls/app/dashboard/dashboard";
import {myAccountRoutes} from "app/router/urls/app/myAccount/myCompany";
import {pigeonNoticesRoutes} from "app/router/urls/app/pigeonNotices/pigeonNotices";

export const route = {
  '/': `${BASE_URL}/`,
  'app': `${BASE_URL}/`,
  ...authRoutes,
  ...publicRoutes,
  ...dashboardRoutes,
  ...pigeonsRoutes,
  ...productsRoutes,
  ...warehousesRoutes,
  ...warehouseReceiptsRoutes,
  ...pigeonNoticesRoutes,
  ...myAccountRoutes
};
