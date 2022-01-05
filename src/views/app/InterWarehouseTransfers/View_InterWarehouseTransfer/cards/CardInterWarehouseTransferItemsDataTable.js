import React from "react";
import {DataTable} from "components/data/dataTable/DataTable";
import {DataTableItem} from "components/data/dataTable/DataTableItem";
import {route} from "app/router/urls/routes";
import {useQueryContext} from "app/context/data/queries/QueryProvider";

const headers = [
  ["Id", 1],
  ["Produkt", 4],
  ["Ilość", 1],
  ["Z pólki", 2],
  ["Na pólkę", 2]
];

export const CardInterWarehouseTransferItemsDataTable = () => {
  const { data } = useQueryContext();

  return (
    <DataTable header={headers}>
      {data !=null && !!data?.items.length &&
        data.items?.map(
          ({
             id,
             product,
             quantity,
             sourceShelf,
             destinationShelf
           }) => {
            return (<DataTableItem
              className="data-table-item"
              key={id}
              // path={route["app.item"](id)}
            >
              <div className="text-uppercase">{id}</div>
              <div>{product.name}</div>
              <div className="text-uppercase">{quantity}</div>
              <div>{sourceShelf?.name}</div>
              <div>{destinationShelf?.name}</div>

            </DataTableItem>)
          }
        )}
    </DataTable>
  );
};
