import React from "react";
import {useParams} from "react-router-dom";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {route} from "app/router/urls/routes";
import {useGetSinglePigeonNotice} from "app/crud/app/pigeonNotices/getSingle";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {EditButton} from "components/button/EditButton";
import {PigeonNoticeDetails} from "./cards/CardPigeonNoticeDetails";

const breadcrumbItems = (name) => [
  {label: "Lista ofert", url: route["app.pigeonNotices"]},
  {label: `Oferta ${name ?? ""}`},
];

const ViewPigeonNotice = () => {
  const {pigeonNoticeId} = useParams();
  const query = useGetSinglePigeonNotice(pigeonNoticeId);

  return (
    <>
      <Breadcrumb items={breadcrumbItems(query?.data?.name)}>
        {query?.data?.status?.id === 1 && <EditButton url={route["app.pigeonNotice.edit"](pigeonNoticeId)}/>}
      </Breadcrumb>
      <div className="container pt-1">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <QueryProvider {...query}>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className='col-12'>
                      <PigeonNoticeDetails/>
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

export default ViewPigeonNotice;
