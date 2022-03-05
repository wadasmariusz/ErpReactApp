import React from "react";
import {useQueryContext} from "app/context/data/queries/QueryProvider";
import {Card, CardBody, CardHeader, CardTitle} from "reactstrap";

export const CardCoilDetails = () => {
  const {data} = useQueryContext();

  return (
    <Card>
      <CardHeader>
        <CardTitle tag={"h4"}>{data?.name}</CardTitle>
      </CardHeader>
      <CardBody>
        <div>Kod: {data?.code}</div>
        <div>Minimalna ilość: {data?.minQuantity}</div>
        <div>Opis: {data?.description}</div>

        <div>Szerokość: {data?.coil?.width}</div>
        <div>Grubość: {data?.coil?.thickness}</div>
        <div>Ilośc cynku: {data?.coil?.amountOfZinc}</div>
        <div>Producent: {data?.coil?.producer}</div>
        <div>Gatunek: {data?.coil?.steelGrade}</div>
        <div>Kolor: {data?.coil?.color}</div>
        {/*<div>Grubość: {data?.coil?.coilType}</div>*/}

      </CardBody>
    </Card>
  );
};
