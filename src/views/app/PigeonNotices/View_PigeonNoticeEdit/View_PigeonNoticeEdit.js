import React from 'react';
import {useParams} from "react-router-dom";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {route} from 'app/router/urls/routes';
import {useGetSinglePigeonNotice} from "app/crud/app/pigeonNotices/getSingle";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {FormEditPigeonNotice} from "views/app/PigeonNotices/View_PigeonNoticeEdit/form/Form_EditPigeonNotice";

const breadcrumbItems = [
  {label: 'Lista ofert', url: route['app.pigeonNotices']},
  {label: 'Edycja ofertę'}
];

const ViewPigeonNoticeEdit = () => {

  const {pigeonNoticeId} = useParams();
  const query = useGetSinglePigeonNotice(pigeonNoticeId);

  return (
    <>
      <Breadcrumb items={breadcrumbItems}/>
      <div className="container pt-1">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Edytuj oferty</h4>
              </div>
              <div className="card-body">
                <QueryProvider {...query}>
                  <FormEditPigeonNotice/>
                </QueryProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewPigeonNoticeEdit;
