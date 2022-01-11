import React from "react";
import {route} from "app/router/urls/routes";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {withFilters} from "app/context/data/FilterProvider/FilterProvider";
import {NoResultsWithAddBtn} from "components/query/NoResultsWithAddBtn";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {QueryHasResults} from "app/context/data/queries/QueryHasResults";
import {QueryHasNoResults} from "app/context/data/queries/QueryHasNoResults";
import {useGetWarehouseReceipts} from "app/crud/app/warehouseReceipts/getList";
import {WarehouseReceiptsDataTable} from "./dataTable/DataTable_WarehouseReceipts";
import {AddButton} from "components/button/AddButton";

const breadcrumbItems = [{label: "Lista przyjęć magazynowych"}];

const ViewWarehouseReceipts = () => {
  const query = useGetWarehouseReceipts();
  return (
    <>
      <Breadcrumb items={breadcrumbItems}>
        <AddButton url={route["app.warehouseReceipt.create"]}/>
      </Breadcrumb>
      <div className="container py-1">
        <QueryProvider {...query} withDefaultPagination>
          <div className="card p-1">
            <QueryHasNoResults>
              <NoResultsWithAddBtn text="Nie znaleziono żadnych przyjęć magazynowych"/>
            </QueryHasNoResults>
            <QueryHasResults>
              <WarehouseReceiptsDataTable/>
            </QueryHasResults>
          </div>
        </QueryProvider>
      </div>
    </>
  );
};

export default withFilters(ViewWarehouseReceipts, {mode: "urlParams"});
