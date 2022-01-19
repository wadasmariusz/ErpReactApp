import {BASE_URL} from "app/config/env";
import {authRoutes} from "app/router/urls/common/auth";
import {publicRoutes} from "app/router/urls/common/publicRoutes";
import {pigeonsRoutes} from "app/router/urls/app/pigeons/pigeons";
import {warehousesRoutes} from "app/router/urls/app/warehouses/warehouses";
import {warehouseReceiptsRoutes} from "app/router/urls/app/warehouseReceipts/warehouseReceipts";
import {ordersRoutes} from "app/router/urls/app/orders/orders";
import {interWarehouseTransfersRoutes} from "app/router/urls/app/interWarehouseTransfers/interWarehouseTransfers";
import {warehouseReleasesRoutes} from "app/router/urls/app/warehouseReleases/warehouseReleases";
import {productsRoutes} from "app/router/urls/app/products/products";
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
  ...usersRoutes,
  ...productKindsRoutes,
  ...productCategoriesRoutes,
  ...warehousesRoutes,
  ...warehouseReceiptsRoutes,
  ...ordersRoutes,
  ...interWarehouseTransfersRoutes,
  ...warehouseReleasesRoutes,
  ...pigeonNoticesRoutes,
  ...myAccountRoutes
};
