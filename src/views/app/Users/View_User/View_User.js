import React from "react";
import {Link, useParams} from "react-router-dom";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {route} from "app/router/urls/routes";
import {useGetSingleUser} from "app/crud/app/users/getSingle";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {EditButton} from "components/button/EditButton";
import {CardUserDetails} from "./cards/CardUserDetails";
import {CardUserWarehouses} from "./cards/CardUserWarehouses";

const breadcrumbItems = (name) => [
  {label: "Lista użytkowników", url: route["app.users"]},
  {label: `Użytkownik ${"firstName"+"lastName" ?? ""}`},
];

const ViewUser = () => {
  const {userId} = useParams();
  const query = useGetSingleUser(userId);

  return (
    <>
      <Breadcrumb items={breadcrumbItems(query?.data?.name)}>
        <EditButton url={route["app.user.edit"](userId)}/>
      </Breadcrumb>
      <div className="container pt-1">
        <QueryProvider {...query}>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className='col-12'>
                      <CardUserDetails/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex flex-column">
              <div className="card-body d-flex flex-column">
                <CardUserWarehouses/>
              </div>
            </div>
          </div>
        </QueryProvider>
      </div>
    </>
  );
};

export default ViewUser;
