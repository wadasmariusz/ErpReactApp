import React from "react";
import {route} from "app/router/urls/routes";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {withFilters} from "app/context/data/FilterProvider/FilterProvider";
import {NoResultsWithAddBtn} from "components/query/NoResultsWithAddBtn";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {QueryHasResults} from "app/context/data/queries/QueryHasResults";
import {QueryHasNoResults} from "app/context/data/queries/QueryHasNoResults";
import {useGetUsers} from "app/crud/app/users/getList";
import {UsersDataTable} from "./dataTable/DataTable_Users";
import {AddButton} from "components/button/AddButton";

const breadcrumbItems = [{label: "Lista użytkowników"}];

const ViewUsers = () => {
  const query = useGetUsers();
  return (
    <>
      <Breadcrumb items={breadcrumbItems}>
        <AddButton url={route["app.user.create"]}/>
      </Breadcrumb>
      <div className="container py-1">
        <QueryProvider {...query} withDefaultPagination>
          <div className="card p-1">
            <QueryHasNoResults>
              <NoResultsWithAddBtn text="Nie znaleziono żadnych uzytkownikow"/>
            </QueryHasNoResults>
            <QueryHasResults>
              <UsersDataTable/>
            </QueryHasResults>
          </div>
        </QueryProvider>
      </div>
    </>
  );
};

export default withFilters(ViewUsers, {mode: "urlParams"});
