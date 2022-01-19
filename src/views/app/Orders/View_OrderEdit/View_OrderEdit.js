import React from 'react';
import {useParams} from "react-router-dom";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {route} from 'app/router/urls/routes';
import {useGetSingleOrder} from "app/crud/app/orders/getSingle";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {FormEditOrder} from "views/app/Orders/View_OrderEdit/form/Form_EditOrder";

const breadcrumbItems = [
  {label: 'Lista przyjęć magazynowych', url: route['app.orders']},
  {label: 'Edycja PM'}
];

const ViewOrderEdit = () => {

  const {orderId} = useParams();
  const query = useGetSingleOrder(orderId);

  return (
    <>
      <Breadcrumb items={breadcrumbItems}/>
      <div className="container pt-1">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Edytuj PM</h4>
              </div>
              <div className="card-body">
                <QueryProvider {...query}>
                  <FormEditOrder/>
                </QueryProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewOrderEdit;
