import React from 'react';
import {useParams} from "react-router-dom";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {route} from 'app/router/urls/routes';
import {useGetSingleInterWarehouseReceipt} from "app/crud/app/interWarehouseReceipts/getSingle";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {FormEditInterWarehouseReceipt} from "views/app/InterWarehouseReceipts/View_InterWarehouseReceiptEdit/form/Form_EditInterWarehouseReceipt";

const breadcrumbItems = [
  {label: 'Lista przyjęć wewnętrznych', url: route['app.interWarehouseReceipts']},
  {label: 'Edycja PW'}
];

const ViewInterWarehouseReceiptEdit = () => {

  const {interWarehouseReceiptId} = useParams();
  const query = useGetSingleInterWarehouseReceipt(interWarehouseReceiptId);

  return (
    <>
      <Breadcrumb items={breadcrumbItems}/>
      <div className="container pt-1">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Edytuj PW</h4>
              </div>
              <div className="card-body">
                <QueryProvider {...query}>
                  <FormEditInterWarehouseReceipt/>
                </QueryProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewInterWarehouseReceiptEdit;
