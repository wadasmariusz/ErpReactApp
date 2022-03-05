import React from "react";
import {route} from "app/router/urls/routes";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {withFilters} from "app/context/data/FilterProvider/FilterProvider";
import {NoResultsWithAddBtn} from "components/query/NoResultsWithAddBtn";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {QueryHasResults} from "app/context/data/queries/QueryHasResults";
import {QueryHasNoResults} from "app/context/data/queries/QueryHasNoResults";
import {useGetInterWarehouseReleases} from "app/crud/app/interWarehouseReleases/getList";
import {InterWarehouseReleasesDataTable} from "./dataTable/DataTable_InterWarehouseReleases";
import {AddButton} from "components/button/AddButton";

const breadcrumbItems = [{label: "Lista wydań magazynowych"}];

const ViewInterWarehouseReleases = () => {
  const query = useGetInterWarehouseReleases();
  return (
    <>
      <Breadcrumb items={breadcrumbItems}>
        <AddButton url={route["app.interWarehouseRelease.create"]}/>
      </Breadcrumb>
      <div className="container py-1">
        <QueryProvider {...query} withDefaultPagination>
          <div className="card p-1">
            <QueryHasNoResults>
              <NoResultsWithAddBtn text="Nie znaleziono żadnych wydań magazynowych"/>
            </QueryHasNoResults>
            <QueryHasResults>
              <InterWarehouseReleasesDataTable/>
            </QueryHasResults>
          </div>
        </QueryProvider>
      </div>
    </>
  );
};

export default withFilters(ViewInterWarehouseReleases, {mode: "urlParams"});
