import React from "react";
import {route} from "app/router/urls/routes";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {withFilters} from "app/context/data/FilterProvider/FilterProvider";
import {NoResultsWithAddBtn} from "components/query/NoResultsWithAddBtn";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {QueryHasResults} from "app/context/data/queries/QueryHasResults";
import {QueryHasNoResults} from "app/context/data/queries/QueryHasNoResults";
import {useGetWarehouseReleases} from "app/crud/app/warehouseReleases/getList";
import {WarehouseReleasesDataTable} from "./dataTable/DataTable_WarehouseReleases";
import {AddButton} from "components/button/AddButton";

const breadcrumbItems = [{label: "Lista wydań zewnętrznych"}];

const ViewWarehouseReleases = () => {
  const query = useGetWarehouseReleases();
  return (
    <>
      <Breadcrumb items={breadcrumbItems}>
        <AddButton url={route["app.warehouseRelease.create"]}/>
      </Breadcrumb>
      <div className="container py-1">
        <QueryProvider {...query} withDefaultPagination>
          <div className="card p-1">
            <QueryHasNoResults>
              <NoResultsWithAddBtn text="Nie znaleziono żadnych wydań zewnętrznych"/>
            </QueryHasNoResults>
            <QueryHasResults>
              <WarehouseReleasesDataTable/>
            </QueryHasResults>
          </div>
        </QueryProvider>
      </div>
    </>
  );
};

export default withFilters(ViewWarehouseReleases, {mode: "urlParams"});
