import {BASE_URL} from "app/config/env";
import {authRoutes} from "app/router/urls/common/auth";
import {publicRoutes} from "app/router/urls/common/publicRoutes";
import {pigeonsRoutes} from "app/router/urls/app/pigeons/pigeons";
import {warehousesRoutes} from "app/router/urls/app/warehouses/warehouses";
import {warehouseReceiptsRoutes} from "app/router/urls/app/warehouseReceipts/warehouseReceipts";
import {interWarehouseTransfersRoutes} from "app/router/urls/app/interWarehouseTransfers/interWarehouseTransfers";
import {warehouseReleasesRoutes} from "app/router/urls/app/warehouseReleases/warehouseReleases";
import {productsRoutes} from "app/router/urls/app/products/products";
import {dashboardRoutes} from "app/router/urls/app/dashboard/dashboard";
import {myAccountRoutes} from "app/router/urls/app/myAccount/myCompany";
import {pigeonNoticesRoutes} from "app/router/urls/app/pigeonNotices/pigeonNotices";
import {productKindsRoutes} from "app/router/urls/app/productKinds/productKinds";

export const route = {
  '/': `${BASE_URL}/`,
  'app': `${BASE_URL}/`,
  ...authRoutes,
  ...publicRoutes,
  ...dashboardRoutes,
  ...pigeonsRoutes,
  ...productsRoutes,
  ...productKindsRoutes,
  ...warehousesRoutes,
  ...warehouseReceiptsRoutes,
  ...interWarehouseTransfersRoutes,
  ...warehouseReleasesRoutes,
  ...pigeonNoticesRoutes,
  ...myAccountRoutes
};
