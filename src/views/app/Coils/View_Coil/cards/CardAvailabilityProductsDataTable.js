import React from "react";
import {DataTable} from "components/data/dataTable/DataTable";
import {DataTableItem} from "components/data/dataTable/DataTableItem";
import {route} from "app/router/urls/routes";
import {useQueryContext} from "app/context/data/queries/QueryProvider";

const headers = [
  ["Magazyn", 2],
  ["Półka", 2],
  ["Ilość", 2],
];

export const CardAvailabilityProductsDataTable = () => {
  const { data } = useQueryContext();
  console.log(data);

  return (
    <DataTable header={headers}>
      {data !=null && !!data?.items.length &&
        // {!!data?.length && !!data?.items.length &&
        data.items?.map(
          ({
             warehouse,
             shelf,
             quantity,

           }) => {
            return (<DataTableItem
              className="data-table-item"
              // key={id}
              // path={route["app.item"](id)}
            >
              {/*<div className="text-uppercase">{id}</div>*/}
              <div>{warehouse.name}</div>
              <div>{shelf.name}</div>
              {/*<div className="text-uppercase">{quantity} [kg]</div>*/}
              <div>{quantity} Kg</div>
            </DataTableItem>)
          }
        )}
    </DataTable>
  );
};
