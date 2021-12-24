import React from "react";
import { useQueryContext } from "app/context/data/queries/QueryProvider";
import { House } from "react-bootstrap-icons";
import { Row, Col } from "reactstrap";

export const ProfileItem = ({ title, content }) => {
  return (
    <div className="my-3">
      <h5>{title}</h5>
      <p className="card-text">{content ?? "-"}</p>
    </div>
  );
};

export const CardMyAccountBasicInfo = () => {
  const { data } = useQueryContext();

  console.log(data);

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">
          <div className="d-flex align-items-center">
            <House className="mr-50" size={24} />
            <h2 className="m-0">Informacje o hodowcy</h2>
          </div>
        </div>
      </div>
      <div className="card-body">
        <Row>
          <Col xs={12} lg={6}>
            <ProfileItem
              title="Imię i nazwisko"
              content={`${data?.firstName} ${data?.lastName}`}
            />
            <ProfileItem title="Email" content={data?.contactEmail} />
            <ProfileItem title="Nr telefonu" content={data?.contactPhone} />
          </Col>
          <Col xs={12} lg={6}>
            <ProfileItem title="Facebook URL" content={data?.urlFacebook} />
            <ProfileItem title="Youtube URL" content={data?.urlYoutube} />
            <ProfileItem title="Instagram URL" content={data?.urlInstagram} />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <p>{data?.descriptionLong}</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};
