import React from "react";
import {route} from "app/router/urls/routes";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {withFilters} from "app/context/data/FilterProvider/FilterProvider";
import {NoResultsWithAddBtn} from "components/query/NoResultsWithAddBtn";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {QueryHasResults} from "app/context/data/queries/QueryHasResults";
import {QueryHasNoResults} from "app/context/data/queries/QueryHasNoResults";
import {useGetPigeonNotices} from "app/crud/app/pigeonNotices/getList";
import {PigeonNoticesDataTable} from "./dataTable/DataTable_PigeonNotices";
import {AddButton} from "components/button/AddButton";

const breadcrumbItems = [{label: "Lista ofert"}];

const ViewPigeons = () => {
  const query = useGetPigeonNotices();
  return (
    <>
      <Breadcrumb items={breadcrumbItems}>
        <AddButton url={route["app.pigeonNotice.create"]}/>
      </Breadcrumb>
      <div className="container py-1">
        <QueryProvider {...query} withDefaultPagination>
          <div className="card p-1">
            <QueryHasNoResults>
              <NoResultsWithAddBtn text="Nie znaleziono żadnych ofert"/>
            </QueryHasNoResults>
            <QueryHasResults>
              <PigeonNoticesDataTable/>
            </QueryHasResults>
          </div>
        </QueryProvider>
      </div>
    </>
  );
};

export default withFilters(ViewPigeons, {mode: "manual"});
