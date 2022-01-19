import React from "react";
import {route} from "app/router/urls/routes";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {withFilters} from "app/context/data/FilterProvider/FilterProvider";
import {NoResultsWithAddBtn} from "components/query/NoResultsWithAddBtn";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {QueryHasResults} from "app/context/data/queries/QueryHasResults";
import {QueryHasNoResults} from "app/context/data/queries/QueryHasNoResults";
import {useGetOrders} from "app/crud/app/orders/getList";
import {OrdersDataTable} from "./dataTable/DataTable_Orders";
import {AddButton} from "components/button/AddButton";

const breadcrumbItems = [{label: "Lista zamówień"}];

const ViewOrders = () => {
  const query = useGetOrders();
  return (
    <>
      <Breadcrumb items={breadcrumbItems}>
        <AddButton url={route["app.order.create"]}/>
      </Breadcrumb>
      <div className="container py-1">
        <QueryProvider {...query} withDefaultPagination>
          <div className="card p-1">
            <QueryHasNoResults>
              <NoResultsWithAddBtn text="Nie znaleziono żadnych zamówień"/>
            </QueryHasNoResults>
            <QueryHasResults>
              <OrdersDataTable/>
            </QueryHasResults>
          </div>
        </QueryProvider>
      </div>
    </>
  );
};

export default withFilters(ViewOrders, {mode: "urlParams"});
