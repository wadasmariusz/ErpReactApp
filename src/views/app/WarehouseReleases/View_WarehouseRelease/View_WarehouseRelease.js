import React from "react";
import {Link, useParams} from "react-router-dom";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {route} from "app/router/urls/routes";
import {useGetSingleWarehouseRelease} from "app/crud/app/warehouseReleases/getSingle";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {EditButton} from "components/button/EditButton";
import {CardWarehouseReleaseDetails} from "./cards/CardWarehouseReleaseDetails";
import {Pen, Plus, PlusCircle} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "../../../../app/config/sizes";
import {CardWarehouseReleaseItemsDataTable} from "./cards/CardWarehouseReleaseItemsDataTable";
import {ConfirmWarehouseRelease} from "./components/modals/ConfirmWarehouseRelease";
import {CanceledWarehouseRelease} from "./components/modals/CanceledWarehouseRelease";

// import {AddWarehouseReleaseShelves} from "./components/modals/AddWarehouseReleaseShelves";

const breadcrumbItems = (id) => [
  {label: "Lista wydań magazynowych", url: route["app.warehouseReleases"]},
  {label: `PM-${id ?? ""}`},
];

const ViewWarehouseRelease = () => {
  const {warehouseReleaseId} = useParams();
  const query = useGetSingleWarehouseRelease(warehouseReleaseId);

  return (
    <>
      <QueryProvider {...query}>
        <Breadcrumb items={breadcrumbItems(query?.data?.id)}>
          {query?.data?.status === 1 && <CanceledWarehouseRelease/>}
          {query?.data?.status === 1 && query?.data?.items?.length > 0 && <ConfirmWarehouseRelease/>}
          {query?.data?.status === 1 && <EditButton url={route["app.warehouseRelease.edit"](warehouseReleaseId)}/>}
        </Breadcrumb>
        <div className="container pt-1">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className='col-12'>
                      <CardWarehouseReleaseDetails/>
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
                          <CardWarehouseReleaseItemsDataTable/>
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

export default ViewWarehouseRelease;
