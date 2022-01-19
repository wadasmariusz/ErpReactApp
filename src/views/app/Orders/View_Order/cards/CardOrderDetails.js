import React from "react";
import {useQueryContext} from "app/context/data/queries/QueryProvider";
import {Card, CardBody, CardHeader, CardTitle} from "reactstrap";
import styled from "styled-components";
import {mapOrderStatusToBadge} from "components/maps/mapOrderStatusToBadge";
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

export const CardOrderDetails = () => {
  const {data} = useQueryContext();

  return (
    <Card>
      <CardHeader>
        <CardTitle tag={"h4"}>NR: {data?.orderNumber}</CardTitle>
      </CardHeader>
      <CardBody>
        <BigLine>Status: <b>{mapOrderStatusToBadge(data?.orderStatus)}</b></BigLine>
        <BigLine>Utworzono: <b>{dayjs(data?.createdAt).format("DD-MM-YYYY HH:mm")}</b></BigLine>
        <BigLine>Przez: <b>{data?.createdByUser?.firstName} {data?.createdByUser?.lastName}</b></BigLine>
        <BigLine>Czas realizacji: <b>{dayjs(data?.realizationDate).format("DD-MM-YYYY HH:mm")}</b></BigLine>
        <BigLine>Klient: <b>{data?.buyer}</b></BigLine>
        <BigLine>Numer: <b>{data?.phoneNumber}</b></BigLine>
        <BigLine>Adres: <b>{data?.deliveryAddress}</b></BigLine>
        <BigLine>Wartość zamówienia: <b>{data?.totalPriceOrder}</b></BigLine>
      </CardBody>
    </Card>
  );
};
