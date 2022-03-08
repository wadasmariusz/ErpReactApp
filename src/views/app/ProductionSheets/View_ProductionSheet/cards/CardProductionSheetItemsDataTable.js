import React from "react";
import {DataTable} from "components/data/dataTable/DataTable";
import {DataTableItem} from "components/data/dataTable/DataTableItem";
import {route} from "app/router/urls/routes";
import {useQueryContext} from "app/context/data/queries/QueryProvider";

const headers = [
  // ["Id", 1],
  ["Szerokość", 2],
  ["Długość", 2],
  ["Ilość", 2],
  ["Mb", 2],
  ["Waga", 2],
];

export const CardProductionSheetItemsDataTable = () => {
  const { data } = useQueryContext();
  console.log(data);

  return (
    <DataTable header={headers}>
      {data !=null && !!data?.sheets.length &&
        data.sheets?.map(
          ({
             id,
             width,
             quantity,
             length,
             mb,
             weight,
           }) => {
            return (<DataTableItem
              className="data-table-item"
              key={id}
              // path={route["app.item"](id)}
            >
              {/*<div className="text-uppercase">{id}</div>*/}
              <div>{width} [m]</div>
              <div>{length} [m]</div>
              <div className="text-uppercase">{quantity}</div>
              <div>{mb} [Mb]</div>
              <div>{weight} [Kg]</div>
            </DataTableItem>)
          }
        )}
    </DataTable>
  );
};
