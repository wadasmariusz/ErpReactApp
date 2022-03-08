import React from "react";
import {useQueryContext} from "app/context/data/queries/QueryProvider";
import {Card, CardBody, CardHeader, CardTitle} from "reactstrap";
import styled from "styled-components";
import {mapDocumentStatusToBadge} from "components/maps/mapDocumentStatusToBadge";
import dayjs from "dayjs";

const Line = styled.div`
  margin-bottom: 0.5rem;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
`;

const BigLine = styled(Line)`
  b {
    font-size: 1.1rem;
  }
`

export const CardInterWarehouseTransferDetails = () => {
  const {data} = useQueryContext();

  return (
    <Card>
      <CardHeader>
        <CardTitle tag={"h4"}>MM-{data?.id}</CardTitle>
      </CardHeader>
      <CardBody>
        <BigLine>Magazyn zródłowy: <b>{data?.sourceWarehouse?.name}</b></BigLine>
        <BigLine>Magazyn docelowy: <b>{data?.destinationWarehouse?.name}</b></BigLine>
        <BigLine>Utworzono: <b>{dayjs(data?.createdAt).format("DD-MM-YYYY HH:mm")}</b></BigLine>
        <BigLine>Status: <b>{mapDocumentStatusToBadge(data?.status)}</b></BigLine>
        <BigLine>Utworzono przez: <b>{data?.createdByUser?.firstName} {data?.createdByUser?.lastName}</b></BigLine>
      </CardBody>
    </Card>
  );
};
