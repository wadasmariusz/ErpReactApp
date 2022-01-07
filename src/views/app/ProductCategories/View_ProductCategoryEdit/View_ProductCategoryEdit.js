import React from 'react';
import {useParams} from "react-router-dom";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {route} from 'app/router/urls/routes';
import {useGetSingleProductCategory} from "app/crud/app/productCategories/getSingle";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {FormEditProductCategory} from "views/app/ProductCategories/View_ProductCategoryEdit/form/Form_EditProductCategory";

const breadcrumbItems = [
  {label: 'Lista rodzajów produktów', url: route['app.productCategories']},
  {label: 'Edycja rodzaju produktu'}
];

const ViewProductCategoryEdit = () => {

  const {productCategoryId} = useParams();
  const query = useGetSingleProductCategory(productCategoryId);

  return (
    <>
      <Breadcrumb items={breadcrumbItems}/>
      <div className="container pt-1">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Edytuj kategorie produktu</h4>
              </div>
              <div className="card-body">
                <QueryProvider {...query}>
                  <FormEditProductCategory/>
                </QueryProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProductCategoryEdit;
