import React from "react";
import {useQueryContext} from "app/context/data/queries/QueryProvider";
import {Card, CardBody, CardHeader, CardTitle} from "reactstrap";

export const CardWarehouseDetails = () => {
  const {data} = useQueryContext();

  return (
      <Card>
        <CardHeader>
          <CardTitle tag={"h4"}>{data?.name}</CardTitle>
        </CardHeader>
        <CardBody>
          <div>Opis: {data?.description}</div>
        </CardBody>
      </Card>
  );
};
