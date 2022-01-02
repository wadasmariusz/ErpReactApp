import React from 'react';
import {useParams} from "react-router-dom";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {route} from 'app/router/urls/routes';
import {useGetSingleProductKind} from "app/crud/app/productKinds/getSingle";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {FormEditProductKind} from "views/app/ProductKinds/View_ProductKindEdit/form/Form_EditProductKind";

const breadcrumbItems = [
  {label: 'Lista rodzajów produktów', url: route['app.productKinds']},
  {label: 'Edycja rodzaju produktu'}
];

const ViewProductKindEdit = () => {

  const {productKindId} = useParams();
  const query = useGetSingleProductKind(productKindId);

  return (
    <>
      <Breadcrumb items={breadcrumbItems}/>
      <div className="container pt-1">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Edytuj rodzaj produktu</h4>
              </div>
              <div className="card-body">
                <QueryProvider {...query}>
                  <FormEditProductKind/>
                </QueryProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProductKindEdit;
