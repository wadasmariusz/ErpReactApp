import React from "react";
import {route} from "app/router/urls/routes";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {withFilters} from "app/context/data/FilterProvider/FilterProvider";
import {NoResultsWithAddBtn} from "components/query/NoResultsWithAddBtn";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {QueryHasResults} from "app/context/data/queries/QueryHasResults";
import {QueryHasNoResults} from "app/context/data/queries/QueryHasNoResults";
import {SheetsDataTable} from "./dataTable/DataTable_Sheets";
import {SheetsFilterBox} from "./components/SheetFilterBox";
import {useSheetFilters} from "./hooks/useSheetFilters";
import {useGetSheets} from "../../../../app/crud/app/sheets/getList";

const breadcrumbItems = [{label: "Lista blach"}];

const ViewSheets = () => {
  const query = useGetSheets();

  const [, nextFilters, filterActions] = useSheetFilters();

  return (
    <>
      <div className="container py-1">
      <SheetsFilterBox filters={nextFilters} {...filterActions}/>
        <QueryProvider {...query} withDefaultPagination>
          <div className="card p-1">
            <QueryHasNoResults>
              <NoResultsWithAddBtn text="Nie znaleziono żadnych blach"/>
            </QueryHasNoResults>
            <QueryHasResults>
              <SheetsDataTable/>
            </QueryHasResults>
          </div>
        </QueryProvider>
      </div>
    </>
  );
};

export default withFilters(ViewSheets, {mode: "urlParams"});
