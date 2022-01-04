import React from "react";
import { DataTable } from "components/data/dataTable/DataTable";
import { DataTableItem } from "components/data/dataTable/DataTableItem";
import { route } from "app/router/urls/routes";
import { useQueryContext } from "app/context/data/queries/QueryProvider";
import styled from "styled-components";
import { truncateText } from "app/utility/truncateText";

const headers = [
  ["Imię", 4],
  ["Nazwisko", 3]
];

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UsersDataTable = () => {
  const { data } = useQueryContext();

  return (
    <DataTable header={headers}>
      {!!data?.length && data?.map(({ id, firstName, lastName, shelfCount }) => (
        <DataTableItem key={id} path={route["app.user"](id)}>
          <div>{firstName}</div>
          <div>{lastName}</div>
        </DataTableItem>
      ))}
    </DataTable>
  );
};
