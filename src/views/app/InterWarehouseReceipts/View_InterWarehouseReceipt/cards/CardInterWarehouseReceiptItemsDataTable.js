import React from "react";
import {DataTable} from "components/data/dataTable/DataTable";
import {DataTableItem} from "components/data/dataTable/DataTableItem";
import {route} from "app/router/urls/routes";
import {useQueryContext} from "app/context/data/queries/QueryProvider";

const headers = [
  // ["Id", 1],
  ["Produkt", 5],
  ["Ilość", 1],
  ["Półka", 1],
];

export const CardInterWarehouseReceiptItemsDataTable = () => {
  const { data } = useQueryContext();
  console.log(data);

  return (
    <DataTable header={headers}>
      {data !=null && !!data?.items.length &&
        data.items?.map(
          ({
             id,
             product,
             quantity,
             shelf
           }) => {
            return (<DataTableItem
              className="data-table-item"
              key={id}
              // path={route["app.item"](id)}
            >
              {/*<div className="text-uppercase">{id}</div>*/}
              <div>{product.name}</div>
              <div className="text-uppercase">{quantity}</div>
              <div>{shelf.name}</div>
            </DataTableItem>)
          }
        )}
    </DataTable>
  );
};
