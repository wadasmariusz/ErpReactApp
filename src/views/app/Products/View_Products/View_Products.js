import React from "react";
import {route} from "app/router/urls/routes";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {withFilters} from "app/context/data/FilterProvider/FilterProvider";
import {NoResultsWithAddBtn} from "components/query/NoResultsWithAddBtn";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {QueryHasResults} from "app/context/data/queries/QueryHasResults";
import {QueryHasNoResults} from "app/context/data/queries/QueryHasNoResults";
import {useGetProducts} from "app/crud/app/products/getList";
import {ProductsDataTable} from "./dataTable/DataTable_Products";
import {AddButton} from "components/button/AddButton";
import {ProductsFilterBox} from "./components/ProductFilterBox";
import {useProductFilters} from "./hooks/useProductFilters";

const breadcrumbItems = [{label: "Lista Produktów"}];

const ViewProducts = () => {
  const query = useGetProducts();

  const [currentFilters, nextFilters, filterActions] = useProductFilters(query.refetch);

  return (
    <>
      <Breadcrumb items={breadcrumbItems}>
        <AddButton url={route["app.product.create"]}/>
      </Breadcrumb>
      <div className="container py-1">
      <ProductsFilterBox filters={nextFilters} {...filterActions}/>
        <QueryProvider {...query} withDefaultPagination>
          <div className="card p-1">
            <QueryHasNoResults>
              <NoResultsWithAddBtn text="Nie znaleziono żadnych produktów"/>
            </QueryHasNoResults>
            <QueryHasResults>
              <ProductsDataTable/>
            </QueryHasResults>
          </div>
        </QueryProvider>
      </div>
    </>
  );
};

export default withFilters(ViewProducts, {mode: "urlParams"});
