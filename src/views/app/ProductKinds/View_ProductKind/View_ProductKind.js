import React from "react";
import {Link, useParams} from "react-router-dom";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {route} from "app/router/urls/routes";
import {useGetSingleProductKind} from "app/crud/app/productKinds/getSingle";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {EditButton} from "components/button/EditButton";
import {CardProductKindDetails} from "./cards/CardProductKindDetails";

const breadcrumbItems = (name) => [
  {label: "Lista rodzajów produktów", url: route["app.productKinds"]},
  {label: `Rodzaj produktu: ${name ?? ""}`},
];

const ViewProductKind = () => {
  const {productKindId} = useParams();
  const query = useGetSingleProductKind(productKindId);

  return (
    <>
      <Breadcrumb items={breadcrumbItems(query?.data?.name)}>
        <EditButton url={route["app.productKind.edit"](productKindId)}/>
      </Breadcrumb>
      <div className="container pt-1">
        <div className="row">
          <div className="col-12">
            <QueryProvider {...query}>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className='col-12'>
                      <CardProductKindDetails/>
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

export default ViewProductKind;
