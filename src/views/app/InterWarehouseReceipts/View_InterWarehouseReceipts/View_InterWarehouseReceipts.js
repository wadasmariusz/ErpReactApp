import React from "react";
import {route} from "app/router/urls/routes";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {withFilters} from "app/context/data/FilterProvider/FilterProvider";
import {NoResultsWithAddBtn} from "components/query/NoResultsWithAddBtn";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {QueryHasResults} from "app/context/data/queries/QueryHasResults";
import {QueryHasNoResults} from "app/context/data/queries/QueryHasNoResults";
import {useGetInterWarehouseReceipts} from "app/crud/app/interWarehouseReceipts/getList";
import {InterWarehouseReceiptsDataTable} from "./dataTable/DataTable_InterWarehouseReceipts";
import {AddButton} from "components/button/AddButton";

const breadcrumbItems = [{label: "Lista przyjęć wewnętrznych"}];

const ViewInterWarehouseReceipts = () => {
  const query = useGetInterWarehouseReceipts();
  return (
    <>
      <Breadcrumb items={breadcrumbItems}>
        <AddButton url={route["app.interWarehouseReceipt.create"]}/>
      </Breadcrumb>
      <div className="container py-1">
        <QueryProvider {...query} withDefaultPagination>
          <div className="card p-1">
            <QueryHasNoResults>
              <NoResultsWithAddBtn text="Nie znaleziono żadnych przyjęć wewnętrznych"/>
            </QueryHasNoResults>
            <QueryHasResults>
              <InterWarehouseReceiptsDataTable/>
            </QueryHasResults>
          </div>
        </QueryProvider>
      </div>
    </>
  );
};

export default withFilters(ViewInterWarehouseReceipts, {mode: "urlParams"});
