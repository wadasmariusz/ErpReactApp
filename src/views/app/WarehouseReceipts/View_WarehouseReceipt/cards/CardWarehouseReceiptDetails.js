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

export const CardWarehouseReceiptDetails = () => {
  const {data} = useQueryContext();

  return (
    <Card>
      <CardHeader>
        <CardTitle tag={"h4"}>PZ-{data?.id}</CardTitle>
      </CardHeader>
      <CardBody>
        <BigLine>Magazyn: <b>{data?.warehouse?.name}</b></BigLine>
        <BigLine>Status: <b>{mapDocumentStatusToBadge(data?.status)}</b></BigLine>
        <BigLine>Utworzono: <b>{dayjs(data?.createdAt).format("DD-MM-YYYY HH:mm")}</b></BigLine>
        <BigLine>Utworzono przez: <b>{data?.createdByUser?.firstName} {data?.createdByUser?.lastName}</b></BigLine>
      </CardBody>
    </Card>
  );
};
