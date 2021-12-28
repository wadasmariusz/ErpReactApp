import React from 'react';
import {useParams} from "react-router-dom";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {route} from 'app/router/urls/routes';
import {useGetSingleProduct} from "app/crud/app/products/getSingle";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {FormEditProduct} from "views/app/Products/View_ProductEdit/form/Form_EditProduct";

const breadcrumbItems = [
  {label: 'Lista produktów', url: route['app.products']},
  {label: 'Edycja produktu'}
];

const ViewProductEdit = () => {

  const {productId} = useParams();
  const query = useGetSingleProduct(productId);

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
                  <FormEditProduct/>
                </QueryProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProductEdit;
