import React from "react";
import {useQueryContext} from "app/context/data/queries/QueryProvider";
import {Card, CardBody, CardHeader, CardTitle, Col, Row} from "reactstrap";
import {PigeonDetails} from "views/app/PigeonNotices/View_PigeonNotice/cards/PigeonDetails";
import {mapPigeonNoticeStatusToBadge} from "components/maps/mapPigeonNoticeStatusToBadge";

export const PigeonNoticeDetails = () => {
  const {data} = useQueryContext();

  return (
    <Card>
      <CardHeader>
        <CardTitle tag={"h4"}>{data?.name}</CardTitle>
      </CardHeader>
      <CardBody>
        <Row>
          <Col xs={7}>
            <h3>Cena: {data?.price}PLN </h3>
            <div className={'d-flex'}>
              <h5 className="mb-0 mr-50">Status: </h5> {mapPigeonNoticeStatusToBadge(data?.status)}
            </div>
          </Col>
          <Col xs={5}>
            <PigeonDetails/>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
