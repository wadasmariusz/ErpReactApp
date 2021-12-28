import React from "react";
import {useQueryContext} from "app/context/data/queries/QueryProvider";
import {Card, CardBody, CardHeader, CardTitle} from "reactstrap";

export const CardWarehouseReceiptDetails = () => {
  const {data} = useQueryContext();

  return (
    <Card>
      <CardHeader>
        <CardTitle tag={"h4"}>{data?.name}</CardTitle>
      </CardHeader>
      <CardBody>
        <div>{data?.description}</div>
      </CardBody>
    </Card>
  );
};
