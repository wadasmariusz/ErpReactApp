import React from "react";
import {route} from "app/router/urls/routes";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {withFilters} from "app/context/data/FilterProvider/FilterProvider";
import {NoResultsWithAddBtn} from "components/query/NoResultsWithAddBtn";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {QueryHasResults} from "app/context/data/queries/QueryHasResults";
import {QueryHasNoResults} from "app/context/data/queries/QueryHasNoResults";
import {useGetProductKinds} from "app/crud/app/productKinds/getList";
import {ProductKindsDataTable} from "./dataTable/DataTable_ProductKinds";
import {AddButton} from "components/button/AddButton";

const breadcrumbItems = [{label: "Lista rodzajów produktów"}];

const ViewProductKinds = () => {
  const query = useGetProductKinds();
  return (
    <>
      <Breadcrumb items={breadcrumbItems}>
        <AddButton url={route["app.productKind.create"]}/>
      </Breadcrumb>
      <div className="container py-1">
        <QueryProvider {...query} withDefaultPagination>
          <div className="card p-1">
            <QueryHasNoResults>
              <NoResultsWithAddBtn text="Nie znaleziono rodzajów produktów"/>
            </QueryHasNoResults>
            <QueryHasResults>
              <ProductKindsDataTable/>
            </QueryHasResults>
          </div>
        </QueryProvider>
      </div>
    </>
  );
};

export default withFilters(ViewProductKinds, {mode: "manual"});
