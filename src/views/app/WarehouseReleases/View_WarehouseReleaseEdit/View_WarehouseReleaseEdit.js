import React from 'react';
import {useParams} from "react-router-dom";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {route} from 'app/router/urls/routes';
import {useGetSingleWarehouseRelease} from "app/crud/app/warehouseReleases/getSingle";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {FormEditWarehouseRelease} from "views/app/WarehouseReleases/View_WarehouseReleaseEdit/form/Form_EditWarehouseRelease";

const breadcrumbItems = [
  {label: 'Lista wydań zewnętrznych', url: route['app.warehouseReleases']},
  {label: 'Edycja WZ'}
];

const ViewWarehouseReleaseEdit = () => {

  const {warehouseReleaseId} = useParams();
  const query = useGetSingleWarehouseRelease(warehouseReleaseId);

  return (
    <>
      <Breadcrumb items={breadcrumbItems}/>
      <div className="container pt-1">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Edytuj WZ</h4>
              </div>
              <div className="card-body">
                <QueryProvider {...query}>
                  <FormEditWarehouseRelease/>
                </QueryProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewWarehouseReleaseEdit;
