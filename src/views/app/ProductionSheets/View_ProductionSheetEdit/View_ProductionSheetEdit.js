import React from 'react';
import {useParams} from "react-router-dom";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {route} from 'app/router/urls/routes';
import {useGetSingleProductionSheet} from "app/crud/app/productionSheets/getSingle";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {FormEditProductionSheet} from "views/app/ProductionSheets/View_ProductionSheetEdit/form/Form_EditProductionSheet";

const breadcrumbItems = [
  {label: 'Lista operacji cięcia', url: route['app.productionSheets']},
  {label: 'Edycja PM'}
];

const ViewProductionSheetEdit = () => {

  const {productionSheetId} = useParams();
  const query = useGetSingleProductionSheet(productionSheetId);

  return (
    <>
      <Breadcrumb items={breadcrumbItems}/>
      <div className="container pt-1">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Edytuj CK</h4>
              </div>
              <div className="card-body">
                <QueryProvider {...query}>
                  <FormEditProductionSheet/>
                </QueryProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProductionSheetEdit;
