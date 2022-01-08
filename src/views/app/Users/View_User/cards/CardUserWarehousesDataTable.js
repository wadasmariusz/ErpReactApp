import React from "react";
import {DataTable} from "components/data/dataTable/DataTable";
import {DataTableItem} from "components/data/dataTable/DataTableItem";
import {route} from "app/router/urls/routes";
import {RemoveWarehouseAccess} from "../../../Warehouses/View_Warehouse/components/modals/RemoveWarehouseAccess";

const headers = [
  // ["Id", 1],
  ["Magazyn", 4],
  ["", 2]
];

export const CardUserWarehousesDataTable = ({warehouses}) => {
  return (
    <DataTable header={headers}>
      {!!warehouses?.length &&
        warehouses?.map(
          ({
             id,
             name
           }) => {
            return (<DataTableItem
              className="data-table-item"
              key={id}
            >
              <div>{name}</div>
              <div className="d-flex justify-content-end">
                <RemoveWarehouseAccess
                  warehouseId={id}
                />
              </div>
            </DataTableItem>)
          }
        )}
    </DataTable>
  );
};
