import React from "react";
import {DataTable} from "components/data/dataTable/DataTable";
import {DataTableItem} from "components/data/dataTable/DataTableItem";
import {route} from "app/router/urls/routes";
import {useQueryContext} from "app/context/data/queries/QueryProvider";
import styled from "styled-components";
import {mapPigeonNoticeStatusToBadge} from "components/maps/mapPigeonNoticeStatusToBadge";

const headers = [
  ["Gołąb", 5],
  ["Cena", 3],
  ["Status", 2],
];

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const PigeonNoticesDataTable = () => {
  const {data} = useQueryContext();

  return (
    <DataTable header={headers}>
      {!!data?.length && data?.map(({id, pigeon, price, status}) => (
        <DataTableItem key={id} path={route["app.pigeonNotice"](id)}>
          <strong>{pigeon?.ringNumber} ({pigeon?.name})</strong>
          <div>{price}</div>
          <div>{mapPigeonNoticeStatusToBadge(status)}</div>
        </DataTableItem>
      ))}
    </DataTable>
  );
};
