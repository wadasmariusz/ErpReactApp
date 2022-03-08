import React from "react";
import {route} from "app/router/urls/routes";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {withFilters} from "app/context/data/FilterProvider/FilterProvider";
import {NoResultsWithAddBtn} from "components/query/NoResultsWithAddBtn";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {QueryHasResults} from "app/context/data/queries/QueryHasResults";
import {QueryHasNoResults} from "app/context/data/queries/QueryHasNoResults";
import {useGetProductionSheets} from "app/crud/app/productionSheets/getList";
import {ProductionSheetsDataTable} from "./dataTable/DataTable_ProductionSheets";
import {AddButton} from "components/button/AddButton";

const breadcrumbItems = [{label: "Lista operacji cięcia"}];

const ViewProductionSheets = () => {
  const query = useGetProductionSheets();
  return (
    <>
      <Breadcrumb items={breadcrumbItems}>
        <AddButton url={route["app.productionSheet.create"]}/>
      </Breadcrumb>
      <div className="container py-1">
        <QueryProvider {...query} withDefaultPagination>
          <div className="card p-1">
            <QueryHasNoResults>
              <NoResultsWithAddBtn text="Nie znaleziono żadnych operacji cięcia"/>
            </QueryHasNoResults>
            <QueryHasResults>
              <ProductionSheetsDataTable/>
            </QueryHasResults>
          </div>
        </QueryProvider>
      </div>
    </>
  );
};

export default withFilters(ViewProductionSheets, {mode: "urlParams"});
