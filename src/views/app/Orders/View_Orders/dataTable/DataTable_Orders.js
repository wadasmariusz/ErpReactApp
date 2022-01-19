import React from "react";
import { DataTable } from "components/data/dataTable/DataTable";
import { DataTableItem } from "components/data/dataTable/DataTableItem";
import { route } from "app/router/urls/routes";
import { useQueryContext } from "app/context/data/queries/QueryProvider";
import styled from "styled-components";
import { truncateText } from "app/utility/truncateText";
import {mapPigeonStatusToBadge} from "../../../../../components/maps/mapPigeonStatusToBadge";
import dayjs from "dayjs";
import {mapOrderStatusToBadge} from "../../../../../components/maps/mapOrderStatusToBadge";
// import {mapOrderTypeToBadge} from "../../../../../components/maps/mapOrderTypeToBadge";

const headers = [
  ["Numer", 2],
  ["Status", 3],
  ["Utworzono", 3],
  ["Utworzył", 3],
  ["Dostawa", 3],
  ["Pozycji", 3],
];

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const OrdersDataTable = () => {
  const { data } = useQueryContext();

  return (
    <DataTable header={headers}>
      {!!data?.length && data?.map(({ id, orderNumber, orderStatus, createdAt, isDelivery, createdByUser,itemsCount }) => (
        <DataTableItem key={id} path={route["app.order"](id)}>
          <div>{orderNumber}</div>
          <div>{mapOrderStatusToBadge(orderStatus)}</div>
          <div>{dayjs(createdAt).format("DD-MM-YYYY HH:mm")}</div>
          <div>{createdByUser?.firstName} {createdByUser?.lastName}</div>
          <div>{String(isDelivery)}</div>
          <div>{itemsCount}</div>

        </DataTableItem>
      ))}
    </DataTable>
  );
};
