import React from 'react';
import {useParams} from "react-router-dom";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {route} from 'app/router/urls/routes';
import {useGetSingleWarehouseReceipt} from "app/crud/app/warehouseReceipts/getSingle";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {FormEditWarehouseReceipt} from "views/app/WarehouseReceipts/View_WarehouseReceiptEdit/form/Form_EditWarehouseReceipt";

const breadcrumbItems = [
  {label: 'Lista przyjęć zewnętrznych', url: route['app.warehouseReceipts']},
  {label: 'Edycja PZ'}
];

const ViewWarehouseReceiptEdit = () => {

  const {warehouseReceiptId} = useParams();
  const query = useGetSingleWarehouseReceipt(warehouseReceiptId);

  return (
    <>
      <Breadcrumb items={breadcrumbItems}/>
      <div className="container pt-1">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Edytuj PZ</h4>
              </div>
              <div className="card-body">
                <QueryProvider {...query}>
                  <FormEditWarehouseReceipt/>
                </QueryProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewWarehouseReceiptEdit;
