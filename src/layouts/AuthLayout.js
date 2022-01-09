import React from 'react';
import {Button, Card, CardBody, Col, Container, Row} from "reactstrap";
import {Redirect} from 'react-router-dom';
import {route} from "app/router/urls/routes";
import '@assets/scss/pages/authentication.scss';
import {useSelectToken} from "app/redux/auth/selectors/selectToken";
import {ChevronLeft} from "react-bootstrap-icons";

export const AuthLayout = ({children, image}) => {

  const token = useSelectToken()

  if (token) return <Redirect to={route['app.dashboard']}/>

  return (
    <Container className="py-3">
      <Row className="m-0 justify-content-center">
        <Col
          sm="8"
          md="8"
          lg="10"
          xl="8"
          className="d-flex justify-content-center"
        >
          <Card className="bg-authentication login-card rounded-0 mb-0 w-100 py-0">
            <Row className="m-0">
              <Col
                lg="5"
                className="d-lg-block d-none text-center align-self-center px-1 py-2"
              >
                <img src={image} alt="loginImg" className="w-100" />
              </Col>
              <Col lg="7" md="12" className="p-0">
                <Card className="rounded-0 mb-0 px-2 h-100">
                  <CardBody className="h-100 d-flex flex-column w-100 justify-content-between">
                    {children}
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      {/*<div className="text-center mt-3">*/}
      {/*  <a href="/">*/}
      {/*    <Button color="white" size="md" className="round"><ChevronLeft size={18}/> Powrót do strony głównej</Button>*/}
      {/*  </a>*/}
      {/*</div>*/}
    </Container>
  );
};
