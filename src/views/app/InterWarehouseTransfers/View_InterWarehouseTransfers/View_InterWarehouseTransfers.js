import React from "react";
import {route} from "app/router/urls/routes";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {withFilters} from "app/context/data/FilterProvider/FilterProvider";
import {NoResultsWithAddBtn} from "components/query/NoResultsWithAddBtn";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {QueryHasResults} from "app/context/data/queries/QueryHasResults";
import {QueryHasNoResults} from "app/context/data/queries/QueryHasNoResults";
import {useGetInterWarehouseTransfers} from "app/crud/app/interWarehouseTransfers/getList";
import {InterWarehouseTransfersDataTable} from "./dataTable/DataTable_InterWarehouseTransfers";
import {AddButton} from "components/button/AddButton";

const breadcrumbItems = [{label: "Lista przesunięć magazynowych"}];

const ViewInterWarehouseTransfers = () => {
  const query = useGetInterWarehouseTransfers();
  return (
    <>
      <Breadcrumb items={breadcrumbItems}>
        <AddButton url={route["app.interWarehouseTransfer.create"]}/>
      </Breadcrumb>
      <div className="container py-1">
        <QueryProvider {...query} withDefaultPagination>
          <div className="card p-1">
            <QueryHasNoResults>
              <NoResultsWithAddBtn text="Nie znaleziono żadnych przesunięć magazynowych"/>
            </QueryHasNoResults>
            <QueryHasResults>
              <InterWarehouseTransfersDataTable/>
            </QueryHasResults>
          </div>
        </QueryProvider>
      </div>
    </>
  );
};

export default withFilters(ViewInterWarehouseTransfers, {mode: "manual"});
