import React from "react";
import {Link, useParams} from "react-router-dom";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {route} from "app/router/urls/routes";
import {useGetSingleInterWarehouseRelease} from "app/crud/app/interWarehouseReleases/getSingle";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {EditButton} from "components/button/EditButton";
import {CardInterWarehouseReleaseDetails} from "./cards/CardInterWarehouseReleaseDetails";
import {Pen, Plus, PlusCircle} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "../../../../app/config/sizes";
import {CardInterWarehouseReleaseItemsDataTable} from "./cards/CardInterWarehouseReleaseItemsDataTable";
import {ConfirmInterWarehouseRelease} from "./components/modals/ConfirmInterWarehouseRelease";
import {CanceledInterWarehouseRelease} from "./components/modals/CanceledInterWarehouseRelease";

// import {AddInterWarehouseReleaseShelves} from "./components/modals/AddInterWarehouseReleaseShelves";

const breadcrumbItems = (id) => [
  {label: "Lista rozchodów wewnętrznych", url: route["app.interWarehouseReleases"]},
  {label: `RW-${id ?? ""}`},
];

const ViewInterWarehouseRelease = () => {
  const {interWarehouseReleaseId} = useParams();
  const query = useGetSingleInterWarehouseRelease(interWarehouseReleaseId);

  return (
    <>
      <QueryProvider {...query}>
        <Breadcrumb items={breadcrumbItems(query?.data?.id)}>
          {query?.data?.status === 1 && <CanceledInterWarehouseRelease/>}
          {query?.data?.status === 1 && query?.data?.items?.length > 0 && <ConfirmInterWarehouseRelease/>}
          {query?.data?.status === 1 && <EditButton url={route["app.interWarehouseRelease.edit"](interWarehouseReleaseId)}/>}
        </Breadcrumb>
        <div className="container pt-1">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className='col-12'>
                      <CardInterWarehouseReleaseDetails/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className='col-12'>
                          <CardInterWarehouseReleaseItemsDataTable/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </QueryProvider>
    </>
  );
};

export default ViewInterWarehouseRelease;
