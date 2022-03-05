import React from 'react';
import {useParams} from "react-router-dom";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {route} from 'app/router/urls/routes';
import {useGetSingleCoil} from "app/crud/app/coils/getSingle";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {FormEditCoil} from "views/app/Coils/View_CoilEdit/form/Form_EditCoil";

const breadcrumbItems = [
  {label: 'Lista produktów', url: route['app.coils']},
  {label: 'Edycja produktu'}
];

const ViewCoilEdit = () => {

  const {productId} = useParams();
  const query = useGetSingleCoil(productId);

  return (
    <>
      <Breadcrumb items={breadcrumbItems}/>
      <div className="container pt-1">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Edytuj produkt</h4>
              </div>
              <div className="card-body">
                <QueryProvider {...query}>
                  <FormEditCoil/>
                </QueryProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewCoilEdit;
