import React from 'react';
import {useParams} from "react-router-dom";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {route} from 'app/router/urls/routes';
import {useGetPigeon} from "app/crud/app/pigeons/getPigeon";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {FormEditPigeon} from "views/app/Pigeons/View_PigeonEdit/form/Form_EditPigeon";

const breadcrumbItems = [
  {label: 'Lista gołębi', url: route['app.pigeons']},
  {label: 'Edycja gołębia'}
];

const ViewPigeonEdit = () => {

  const {pigeonId} = useParams();
  const query = useGetPigeon(pigeonId);

  return (
    <>
      <Breadcrumb items={breadcrumbItems}/>
      <div className="container pt-1">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Edytuj gołębia</h4>
              </div>
              <div className="card-body">
                <QueryProvider {...query}>
                  <FormEditPigeon/>
                </QueryProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewPigeonEdit;
