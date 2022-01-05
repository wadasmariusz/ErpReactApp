import React from "react";
import {DataTable} from "components/data/dataTable/DataTable";
import {DataTableItem} from "components/data/dataTable/DataTableItem";
import {route} from "app/router/urls/routes";
import {useQueryContext} from "app/context/data/queries/QueryProvider";

const headers = [
  // ["Id", 1],
  ["Produkt", 4],
  ["Ilość", 1],
];

export const CardWarehouseShelfProductsDataTable = ({products}) => {
  return (
    <DataTable header={headers}>
      {!!products?.length &&
        products?.map(
          ({
             id,
             name,
            quantity
           }) => {
            return (<DataTableItem
              className="data-table-item"
              key={id}
              // path={route["app.shelf"](id)}
            >
              {/*<div className="text-uppercase">{id}</div>*/}
              <div>{name}</div>
              <div className="text-uppercase">{quantity}</div>
            </DataTableItem>)
          }
        )}
    </DataTable>
  );
};
