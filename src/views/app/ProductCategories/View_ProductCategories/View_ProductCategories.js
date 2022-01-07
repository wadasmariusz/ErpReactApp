import React from "react";
import {route} from "app/router/urls/routes";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {withFilters} from "app/context/data/FilterProvider/FilterProvider";
import {NoResultsWithAddBtn} from "components/query/NoResultsWithAddBtn";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {QueryHasResults} from "app/context/data/queries/QueryHasResults";
import {QueryHasNoResults} from "app/context/data/queries/QueryHasNoResults";
import {useGetProductCategories} from "app/crud/app/productCategories/getList";
import {ProductCategoriesDataTable} from "./dataTable/DataTable_ProductCategories";
import {AddButton} from "components/button/AddButton";

const breadcrumbItems = [{label: "Lista kategori produktów"}];

const ViewProductCategories = () => {
  const query = useGetProductCategories();
  return (
    <>
      <Breadcrumb items={breadcrumbItems}>
        <AddButton url={route["app.productCategory.create"]}/>
      </Breadcrumb>
      <div className="container py-1">
        <QueryProvider {...query} withDefaultPagination>
          <div className="card p-1">
            <QueryHasNoResults>
              <NoResultsWithAddBtn text="Nie znaleziono kategori produktów"/>
            </QueryHasNoResults>
            <QueryHasResults>
              <ProductCategoriesDataTable/>
            </QueryHasResults>
          </div>
        </QueryProvider>
      </div>
    </>
  );
};

export default withFilters(ViewProductCategories, {mode: "manual"});
