import {BASE_URL} from "app/config/env";
import {authRoutes} from "app/router/urls/common/auth";
import {publicRoutes} from "app/router/urls/common/publicRoutes";
import {pigeonsRoutes} from "app/router/urls/app/pigeons/pigeons";
import {warehousesRoutes} from "app/router/urls/app/warehouses/warehouses";
import {warehouseReceiptsRoutes} from "app/router/urls/app/warehouseReceipts/warehouseReceipts";
import {productionSheetsRoutes} from "app/router/urls/app/productionSheets/productionSheets";
import {interWarehouseReceiptsRoutes} from "app/router/urls/app/interWarehouseReceipts/interWarehouseReceipts";
import {ordersRoutes} from "app/router/urls/app/orders/orders";
import {interWarehouseTransfersRoutes} from "app/router/urls/app/interWarehouseTransfers/interWarehouseTransfers";
import {warehouseReleasesRoutes} from "app/router/urls/app/warehouseReleases/warehouseReleases";
import {interWarehouseReleasesRoutes} from "app/router/urls/app/interWarehouseReleases/interWarehouseReleases";
import {productsRoutes} from "app/router/urls/app/products/products";
import {coilsRoutes} from "app/router/urls/app/coils/coils";
import {usersRoutes} from "app/router/urls/app/users/users";
import {dashboardRoutes} from "app/router/urls/app/dashboard/dashboard";
import {myAccountRoutes} from "app/router/urls/app/myAccount/myCompany";
import {pigeonNoticesRoutes} from "app/router/urls/app/pigeonNotices/pigeonNotices";
import {productKindsRoutes} from "app/router/urls/app/productKinds/productKinds";
import {productCategoriesRoutes} from "app/router/urls/app/productCategories/productCategories";

export const route = {
  '/': `${BASE_URL}/`,
  'app': `${BASE_URL}/`,
  ...authRoutes,
  ...publicRoutes,
  ...dashboardRoutes,
  ...pigeonsRoutes,
  ...productsRoutes,
  ...coilsRoutes,
  ...usersRoutes,
  ...productKindsRoutes,
  ...productCategoriesRoutes,
  ...warehousesRoutes,
  ...warehouseReceiptsRoutes,
  ...productionSheetsRoutes,
  ...interWarehouseReceiptsRoutes,
  ...ordersRoutes,
  ...interWarehouseTransfersRoutes,
  ...warehouseReleasesRoutes,
  ...interWarehouseReleasesRoutes,
  ...pigeonNoticesRoutes,
  ...myAccountRoutes
};
