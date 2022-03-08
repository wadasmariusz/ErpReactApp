import React from "react";
import { DataTable } from "components/data/dataTable/DataTable";
import { DataTableItem } from "components/data/dataTable/DataTableItem";
import { route } from "app/router/urls/routes";
import { useQueryContext } from "app/context/data/queries/QueryProvider";
import styled from "styled-components";
import { truncateText } from "app/utility/truncateText";

const headers = [
  ["Kod", 1],
  ["Nazwa", 5],
  ["Ilość", 1]
];

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CoilsDataTable = () => {
  const { data } = useQueryContext();

  return (
    <DataTable header={headers}>
      {!!data?.length && data?.map(({ id, code, name, quantity, minQuantity }) => (
        <DataTableItem key={id} path={route["app.coil"](id)}>
          <div>{code}</div>
          <div>{name}</div>
          <div className={` ${quantity <= minQuantity ? "text-danger text-bold-700" : ""}`}>{quantity} Kg</div>
          {/*po huj tu w 29 "text-uppercase"*/}
          {/*<div>{truncateText(description, 60)}</div>*/}
        </DataTableItem>
      ))}
    </DataTable>
  );
};
