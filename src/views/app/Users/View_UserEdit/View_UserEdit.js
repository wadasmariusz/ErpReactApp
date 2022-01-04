import React from 'react';
import {useParams} from "react-router-dom";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {route} from 'app/router/urls/routes';
import {useGetSingleUser} from "app/crud/app/users/getSingle";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {FormEditUser} from "views/app/Users/View_UserEdit/form/Form_EditUser";

const breadcrumbItems = [
  {label: 'Lista użytkowników', url: route['app.users']},
  {label: 'Edycja użytkownika'}
];

const ViewUserEdit = () => {

  const {userId} = useParams();
  const query = useGetSingleUser(userId);

  return (
    <>
      <Breadcrumb items={breadcrumbItems}/>
      <div className="container pt-1">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Edytuj produkt</h4>
              </div>
              <div className="card-body">
                <QueryProvider {...query}>
                  <FormEditUser/>
                </QueryProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewUserEdit;
