import React from 'react';
import {useParams} from "react-router-dom";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {route} from 'app/router/urls/routes';
import {useGetSingleInterWarehouseTransfer} from "app/crud/app/interWarehouseTransfers/getSingle";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {FormEditInterWarehouseTransfer} from "views/app/InterWarehouseTransfers/View_InterWarehouseTransferEdit/form/Form_EditInterWarehouseTransfer";

const breadcrumbItems = [
  {label: 'Lista przesunięć magazynowych', url: route['app.interWarehouseTransfers']},
  {label: 'Edycja PM'}
];

const ViewInterWarehouseTransferEdit = () => {

  const {interWarehouseTransferId} = useParams();
  const query = useGetSingleInterWarehouseTransfer(interWarehouseTransferId);

  return (
    <>
      <Breadcrumb items={breadcrumbItems}/>
      <div className="container pt-1">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Edytuj przesuniecie magazynowe</h4>
              </div>
              <div className="card-body">
                <QueryProvider {...query}>
                  <FormEditInterWarehouseTransfer/>
                </QueryProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewInterWarehouseTransferEdit;
