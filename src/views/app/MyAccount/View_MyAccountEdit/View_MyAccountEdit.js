import React from 'react';
import {Breadcrumb} from "components/includes/Breadcrumb";
import {route} from 'app/router/urls/routes';

const breadcrumbItems = [
  {label: 'Informacje o firmie', url: route['app.myAccount']},
  {label: 'Edytuj informacje'}
];


const ViewMyAccountEdit = () => {


  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className="container pt-1">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Edytuj dane konta</h4>
              </div>
              <div className="card-body">
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewMyAccountEdit;
