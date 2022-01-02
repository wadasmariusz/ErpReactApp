import React from "react";
import {useQueryContext} from "app/context/data/queries/QueryProvider";
import {Card, CardBody, CardHeader, CardTitle} from "reactstrap";

export const CardProductKindDetails = () => {
  const {data} = useQueryContext();

  return (
    <Card>
      <CardHeader>
        <CardTitle tag={"h4"}>{data?.name}</CardTitle>
      </CardHeader>
      <CardBody>
        <div>Kod: {data?.code}</div>
      </CardBody>
    </Card>
  );
};
