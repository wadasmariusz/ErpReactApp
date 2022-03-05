import React from 'react';
import {useParams} from "react-router-dom";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {route} from 'app/router/urls/routes';
import {useGetSingleInterWarehouseRelease} from "app/crud/app/interWarehouseReleases/getSingle";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {FormEditInterWarehouseRelease} from "views/app/InterWarehouseReleases/View_InterWarehouseReleaseEdit/form/Form_EditInterWarehouseRelease";

const breadcrumbItems = [
  {label: 'Lista wydań magazynowych', url: route['app.interWarehouseReleases']},
  {label: 'Edycja WM'}
];

const ViewInterWarehouseReleaseEdit = () => {

  const {interWarehouseReleaseId} = useParams();
  const query = useGetSingleInterWarehouseRelease(interWarehouseReleaseId);

  return (
    <>
      <Breadcrumb items={breadcrumbItems}/>
      <div className="container pt-1">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Edytuj WM</h4>
              </div>
              <div className="card-body">
                <QueryProvider {...query}>
                  <FormEditInterWarehouseRelease/>
                </QueryProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewInterWarehouseReleaseEdit;
