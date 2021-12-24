import React from 'react';
import {useParams} from "react-router-dom";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {route} from 'app/router/urls/routes';
import {useGetSingleWarehouse} from "app/crud/app/warehouses/getSingle";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {FormEditWarehouse} from "views/app/Warehouses/View_WarehouseEdit/form/Form_EditWarehouse";

const breadcrumbItems = [
  {label: 'Lista magazynów', url: route['app.warehouses']},
  {label: 'Edycja magazunu'}
];

const ViewWarehouseEdit = () => {

  const {warehouseId} = useParams();
  const query = useGetSingleWarehouse(warehouseId);

  return (
    <>
      <Breadcrumb items={breadcrumbItems}/>
      <div className="container pt-1">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Edytuj magazyn</h4>
              </div>
              <div className="card-body">
                <QueryProvider {...query}>
                  <FormEditWarehouse/>
                </QueryProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewWarehouseEdit;
