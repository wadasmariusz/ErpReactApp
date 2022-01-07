import React from 'react';
import {useParams} from "react-router-dom";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {route} from 'app/router/urls/routes';
import {useGetSingleWarehouseShelf} from "app/crud/app/shelves/getSingle";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {FormEditShelf} from "views/app/Shelves/View_ShelfEdit/form/Form_EditShelf";

const breadcrumbItems = [
  {label: 'Magazyn', url: route['app.shelves']},
  {label: 'Edycja półki'}
];

const ViewShelfEdit = () => {

  const {warehouseId, shelfId} = useParams();
  const query = useGetSingleWarehouseShelf(warehouseId, shelfId);

  return (
    <>
      <Breadcrumb items={breadcrumbItems}/>
      <div className="container pt-1">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Edytuj półke</h4>
              </div>
              <div className="card-body">
                <QueryProvider {...query}>
                  <FormEditShelf/>
                </QueryProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewShelfEdit;
