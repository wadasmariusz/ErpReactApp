import React from "react";
import { DataTable } from "components/data/dataTable/DataTable";
import { DataTableItem } from "components/data/dataTable/DataTableItem";
import { route } from "app/router/urls/routes";
import { useQueryContext } from "app/context/data/queries/QueryProvider";
import styled from "styled-components";
import { truncateText } from "app/utility/truncateText";
import {mapWarehouseTypeToBadge} from "../../../../../components/maps/mapWarehouseTypeToBadge";

const headers = [
  ["Nazwa", 4],
  ["Opis", 3],
  ["Ilość półek", 3]
];

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const WarehousesDataTable = () => {
  const { data } = useQueryContext();

  return (
    <DataTable header={headers}>
      {!!data?.length && data?.map(({ id, name, description, shelfCount }) => (
        <DataTableItem key={id} path={route["app.warehouse"](id)}>
          <div>{name}</div>
          <div>{truncateText(description, 60)}</div>
          <div>{shelfCount}</div>
        </DataTableItem>
      ))}
    </DataTable>
  );
};
