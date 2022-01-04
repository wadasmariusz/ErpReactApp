import React from "react";
import {useQueryContext} from "app/context/data/queries/QueryProvider";
import {Card, CardBody, CardHeader, CardTitle} from "reactstrap";

export const CardUserDetails = () => {
  const {data} = useQueryContext();

  return (
    <Card>
      <CardHeader>
        <CardTitle tag={"h4"}>{data?.firstName} {data?.lastName}</CardTitle>
      </CardHeader>
      <CardBody>
        <div>Email: {data?.email}</div>
        <div>Godność: {data?.firstName} {data?.lastName}</div>
        <div>Numer: {data?.phoneNumber}</div>
      </CardBody>
    </Card>
  );
};
