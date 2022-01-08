import React from "react";
import { DataTable } from "components/data/dataTable/DataTable";
import { DataTableItem } from "components/data/dataTable/DataTableItem";
import { route } from "app/router/urls/routes";
import { useQueryContext } from "app/context/data/queries/QueryProvider";
import styled from "styled-components";
import { truncateText } from "app/utility/truncateText";
import {mapPigeonStatusToBadge} from "../../../../../components/maps/mapPigeonStatusToBadge";
import {mapDocumentStatusToBadge} from "../../../../../components/maps/mapDocumentStatusToBadge";
import dayjs from "dayjs";
// import {mapInterWarehouseTransferTypeToBadge} from "../../../../../components/maps/mapInterWarehouseTransferTypeToBadge";

const headers = [
  ["Nr", 3],
  ["Z magazynu", 3],
  ["Do magazynu", 3],
  ["Status", 3],
  ["Data", 3],
  ["Utworzył", 3]
];

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const InterWarehouseTransfersDataTable = () => {
  const { data } = useQueryContext();

  return (
    <DataTable header={headers}>
      {!!data?.length && data?.map(({ id,sourceWarehouse,destinationWarehouse, status, createdAt, createdByUser }) => (
        <DataTableItem key={id} path={route["app.interWarehouseTransfer"](id)}>
          <div>PM-{id}</div>
          <div>{sourceWarehouse?.name}</div>
          <div>{destinationWarehouse?.name}</div>
          <div>{mapDocumentStatusToBadge(status)}</div>
          <div>{dayjs(createdAt).format("DD-MM-YYYY HH:mm")}</div>
          <div>{createdByUser?.firstName} {createdByUser?.lastName}</div>
        </DataTableItem>
      ))}
    </DataTable>
  );
};
