import React from "react";
import {route} from "app/router/urls/routes";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {withFilters} from "app/context/data/FilterProvider/FilterProvider";
import {NoResultsWithAddBtn} from "components/query/NoResultsWithAddBtn";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {QueryHasResults} from "app/context/data/queries/QueryHasResults";
import {QueryHasNoResults} from "app/context/data/queries/QueryHasNoResults";
import {useGetCoils} from "app/crud/app/coils/getList";
import {CoilsDataTable} from "./dataTable/DataTable_Coils";
import {AddButton} from "components/button/AddButton";
import {CoilsFilterBox} from "./components/CoilFilterBox";
import {useCoilFilters} from "./hooks/useCoilFilters";

const breadcrumbItems = [{label: "Lista Kregów"}];

const ViewCoils = () => {
  const query = useGetCoils();

  const [, nextFilters, filterActions] = useCoilFilters();

  return (
    <>
      <Breadcrumb items={breadcrumbItems}>
        <AddButton url={route["app.coil.create"]}/>
      </Breadcrumb>
      <div className="container py-1">
        <CoilsFilterBox filters={nextFilters} {...filterActions}/>
        <QueryProvider {...query} withDefaultPagination>
          <div className="card p-1">
            <QueryHasNoResults>
              <NoResultsWithAddBtn text="Nie znaleziono żadnych kregów"/>
            </QueryHasNoResults>
            <QueryHasResults>
              <CoilsDataTable/>
            </QueryHasResults>
          </div>
        </QueryProvider>
      </div>
    </>
  );
};

export default withFilters(ViewCoils, {mode: "urlParams"});
