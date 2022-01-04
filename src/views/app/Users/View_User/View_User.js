import React from "react";
import {Link, useParams} from "react-router-dom";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {route} from "app/router/urls/routes";
import {useGetSingleUser} from "app/crud/app/users/getSingle";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {EditButton} from "components/button/EditButton";
import {CardUserDetails} from "./cards/CardUserDetails";

const breadcrumbItems = (name) => [
  {label: "Lista użytkowników", url: route["app.users"]},
  {label: `Użytkownik: ${name ?? ""}`},
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
        <div className="row">
          <div className="col-12">
            <QueryProvider {...query}>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className='col-12'>
                      <CardUserDetails/>
                    </div>
                  </div>
                </div>
              </div>
            </QueryProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewUser;
