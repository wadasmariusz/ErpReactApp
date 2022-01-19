import React from "react";
import {DataTable} from "components/data/dataTable/DataTable";
import {DataTableItem} from "components/data/dataTable/DataTableItem";
import {route} from "app/router/urls/routes";
import {useQueryContext} from "app/context/data/queries/QueryProvider";

const headers = [
  // ["Id", 1],
  ["Produkt / Nazwa", 4],
  ["Ilość", 1],
  ["Cena (szt)", 1],
  ["Cena ", 1],
];

export const CardOrderItemsDataTable = () => {
  const { data } = useQueryContext();
  console.log(data);

  return (
    <DataTable header={headers}>
      {data !=null && !!data?.items.length &&
        data.items?.map(
          ({
             id,
             name,
             product,
             quantity,
             unitPrice,
             totalPrice
           }) => {
            return (<DataTableItem
              className="data-table-item"
              key={id}
              // path={route["app.item"](id)}
            >
              {/*<div className="text-uppercase">{id}</div>*/}
              <div className="text-uppercase">{product?.name} {name}</div>
              <div className="text-uppercase">{quantity}</div>
              <div className="text-uppercase">{unitPrice}</div>
              <div className="text-uppercase">{totalPrice}</div>
            </DataTableItem>)
          }
        )}
    </DataTable>
  );
};
