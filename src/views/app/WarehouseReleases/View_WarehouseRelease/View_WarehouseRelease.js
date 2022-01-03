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
// import {AddWarehouseReleaseShelves} from "./components/modals/AddWarehouseReleaseShelves";

const breadcrumbItems = (id) => [
  {label: "Lista przyjęć magazynowych", url: route["app.warehouseReleases"]},
  {label: `PM-${id ?? ""}`},
];

const ViewWarehouseRelease = () => {
  const {warehouseReleaseId} = useParams();
  const query = useGetSingleWarehouseRelease(warehouseReleaseId);

  return (
    <>
      <Breadcrumb items={breadcrumbItems(query?.data?.id)}>
        <EditButton url={route["app.warehouseRelease.edit"](warehouseReleaseId)}/>
      </Breadcrumb>
      <div className="container pt-1">
        <div className="row">
          <div className="col-12">
            <QueryProvider {...query}>
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
                  <CardWarehouseReleaseItemsDataTable/>
                </div>
              </div>
            </QueryProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewWarehouseRelease;
