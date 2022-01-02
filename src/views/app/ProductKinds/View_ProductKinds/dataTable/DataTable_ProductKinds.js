import React from "react";
import { DataTable } from "components/data/dataTable/DataTable";
import { DataTableItem } from "components/data/dataTable/DataTableItem";
import { route } from "app/router/urls/routes";
import { useQueryContext } from "app/context/data/queries/QueryProvider";
import styled from "styled-components";
import { truncateText } from "app/utility/truncateText";

const headers = [
  ["Kod", 4],
  ["Nazwa", 3]
];

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductKindsDataTable = () => {
  const { data } = useQueryContext();

  return (
    <DataTable header={headers}>
      {!!data?.length && data?.map(({ id, name, code, shelfCount }) => (
        <DataTableItem key={id} path={route["app.productKind"](id)}>
          <div>{code}</div>
          <div>{name}</div>
        </DataTableItem>
      ))}
    </DataTable>
  );
};
