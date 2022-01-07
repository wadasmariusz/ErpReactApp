import {BASE_URL} from "app/config/env";

const prefix = `${BASE_URL}/product-categories`;

export const productCategoriesRoutes = {
  'app.productCategories': `${prefix}`,
  //,
  'app.productCategory.create': `${prefix}/create`,
  'app.productCategory': (dId = ':productCategoryId') => `${prefix}/${dId}`,
  'app.productCategory.edit': (dId = ':productCategoryId') => `${prefix}/${dId}/edit`,
}
