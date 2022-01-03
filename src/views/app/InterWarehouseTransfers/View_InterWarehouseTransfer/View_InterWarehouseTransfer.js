import React from "react";
import {Link, useParams} from "react-router-dom";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {route} from "app/router/urls/routes";
import {useGetSingleInterWarehouseTransfer} from "app/crud/app/interWarehouseTransfers/getSingle";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {EditButton} from "components/button/EditButton";
import {CardInterWarehouseTransferDetails} from "./cards/CardInterWarehouseTransferDetails";
import {Pen, Plus, PlusCircle} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "../../../../app/config/sizes";
import {CardInterWarehouseTransferItemsDataTable} from "./cards/CardInterWarehouseTransferItemsDataTable";
// import {AddInterWarehouseTransferShelves} from "./components/modals/AddInterWarehouseTransferShelves";

const breadcrumbItems = (id) => [
  {label: "Lista przesunięć magazynowych", url: route["app.interWarehouseTransfers"]},
  {label: `PM-${id ?? ""}`},
];

const ViewInterWarehouseTransfer = () => {
  const {interWarehouseTransferId} = useParams();
  const query = useGetSingleInterWarehouseTransfer(interWarehouseTransferId);

  return (
    <>
      <Breadcrumb items={breadcrumbItems(query?.data?.id)}>
        <EditButton url={route["app.interWarehouseTransfer.edit"](interWarehouseTransferId)}/>
      </Breadcrumb>
      <div className="container pt-1">
        <div className="row">
          <div className="col-12">
            <QueryProvider {...query}>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className='col-12'>
                      <CardInterWarehouseTransferDetails/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <CardInterWarehouseTransferItemsDataTable/>
                </div>
              </div>
            </QueryProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewInterWarehouseTransfer;
