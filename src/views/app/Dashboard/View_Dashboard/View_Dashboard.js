import React from 'react';
import {Breadcrumb} from "components/includes/Breadcrumb";
import {Card, CardBody, CardHeader, CardTitle, Col, Container, Row} from 'reactstrap';
import {useGetStats} from "app/crud/app/dashboard/getStats";
import {PigeonGenderStats} from "views/app/Dashboard/View_Dashboard/cards/PigeonGenderStats";
import {DovecoteTypeStats} from "views/app/Dashboard/View_Dashboard/cards/DovecoteTypeStats";

const breadcrumbItems = [
  {label: 'Dashboard'},
];

const ViewDashboard = () => {

  const {data} = useGetStats();

  return (
    <>
      <Breadcrumb items={breadcrumbItems}/>
      <Container>
        <Card>
          <CardHeader>
            <CardTitle>
              Dashboard
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
              <Col xs={12} lg={6} className='d-flex flex-column align-items-center'>
                <h4 className='text-center'>
                  Ilość Gołębi: {data?.totalPigeonsCount}
                </h4>
                  <PigeonGenderStats
                    pigeonGenderStats={data?.pigeonGenderStats}
                  />
              </Col>
              <Col xs={12} lg={6} className='d-flex flex-column align-items-center'>
                <h4 className='text-center'>
                  Ilość Gołębników: {data?.totalDovecotesCount}
                </h4>
                <DovecoteTypeStats
                  dovecoteStats={data?.dovecoteStats}
                />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default ViewDashboard;
