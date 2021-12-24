import React from "react";
import {useParams} from "react-router-dom";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {route} from "app/router/urls/routes";
import {useGetPigeon} from "app/crud/app/pigeons/getPigeon";
import {EditButton} from "components/button/EditButton";
import {CardPigeonHeader} from "views/app/Pigeons/View_Pigeon/cards/CardPigeonHeader";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {CardPigeonDetails} from "views/app/Pigeons/View_Pigeon/cards/CardPigeonDetails";
import {CardPigeonParents} from "views/app/Pigeons/View_Pigeon/cards/CardPigeonParents";
import {CardPigeonWarehouse} from "views/app/Pigeons/View_Pigeon/cards/CardPigeonWarehouse";
import {AddPigeonNotice} from "views/app/Pigeons/View_Pigeon/components/modal/AddPiegonNotice";

const breadcrumbItems = (name) => [
  {label: "Lista gołębi", url: route["app.pigeons"]},
  {label: `${name ?? ""}`},
];

const ViewPigeon = () => {
  const {pigeonId} = useParams();

  const query = useGetPigeon(pigeonId);

  return (
    <>
    <QueryProvider {...query}>
      <Breadcrumb items={breadcrumbItems(query?.data?.ringNumber)}>
        <AddPigeonNotice/>
        <EditButton url={route["app.pigeon.edit"](pigeonId)}/>
      </Breadcrumb>

      <div className="container pt-1">
        <div className="row">

            <div className="col-12 col-lg-9 d-flex">
              <div className="card h-100 w-100">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <CardPigeonHeader/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <CardPigeonDetails/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 d-flex  flex-column">
              <div className="card w-100 h-100 mb-1">
                <div className="card-body d-flex flex-column">
                  <CardPigeonParents/>
                </div>
              </div>
              <div className="card mb-0">
                <div className="card-body d-flex flex-column">
                  <CardPigeonWarehouse/>
                </div>
              </div>
            </div>

        </div>
      </div>
    </QueryProvider>
    </>
  );
};

export default ViewPigeon;
