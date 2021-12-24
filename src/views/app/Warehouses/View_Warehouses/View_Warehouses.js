import React from "react";
import {route} from "app/router/urls/routes";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {withFilters} from "app/context/data/FilterProvider/FilterProvider";
import {NoResultsWithAddBtn} from "components/query/NoResultsWithAddBtn";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {QueryHasResults} from "app/context/data/queries/QueryHasResults";
import {QueryHasNoResults} from "app/context/data/queries/QueryHasNoResults";
import {useGetWarehouses} from "app/crud/app/warehouses/getList";
import {WarehousesDataTable} from "./dataTable/DataTable_Warehouses";
import {AddButton} from "components/button/AddButton";

const breadcrumbItems = [{label: "Lista Magazynów"}];

const ViewWarehouses = () => {
  const query = useGetWarehouses();
  return (
    <>
      <Breadcrumb items={breadcrumbItems}>
        <AddButton url={route["app.warehouse.create"]}/>
      </Breadcrumb>
      <div className="container py-1">
        <QueryProvider {...query} withDefaultPagination>
          <div className="card p-1">
            <QueryHasNoResults>
              <NoResultsWithAddBtn text="Nie znaleziono żadnych magazynów"/>
            </QueryHasNoResults>
            <QueryHasResults>
              <WarehousesDataTable/>
            </QueryHasResults>
          </div>
        </QueryProvider>
      </div>
    </>
  );
};

export default withFilters(ViewWarehouses, {mode: "manual"});
