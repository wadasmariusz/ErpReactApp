import React from 'react';
import {route} from "app/router/urls/routes";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {withFilters} from "app/context/data/FilterProvider/FilterProvider";
import {useGetPigeons} from "app/crud/app/pigeons/getPigeons";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {QueryHasNoResults} from "app/context/data/queries/QueryHasNoResults";
import {NoResultsWithAddBtn} from "components/query/NoResultsWithAddBtn";
import {QueryHasResults} from "app/context/data/queries/QueryHasResults";
import {PigeonsDataTable} from "views/app/Pigeons/View_Pigeons/dataTable/DataTable_Pigeons";
import {AddButton} from "components/button/AddButton";

const breadcrumbItems = [
  {label: 'Lista gołębi'}
];

const ViewPigeons = () => {

  const query = useGetPigeons();

  return (
    <>
      <Breadcrumb items={breadcrumbItems}>
        <AddButton url={route['app.pigeon.create']}/>
      </Breadcrumb>
      <div className="container pt-3">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <QueryProvider {...query} withDefaultPagination>
                <div>
                  <QueryHasResults>
                    <PigeonsDataTable/>
                  </QueryHasResults>
                  <QueryHasNoResults>
                    <NoResultsWithAddBtn
                      text="Nie znaleziono żadnych gołębi"
                      url={route['app.pigeon.create']}
                    />
                  </QueryHasNoResults>
                </div>
              </QueryProvider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withFilters(ViewPigeons, {mode: 'manual'});
