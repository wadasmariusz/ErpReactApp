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
import {ConfirmInterWarehouseTransfer} from "./components/modals/ConfirmInterWarehouseTransfer";
import {CanceledInterWarehouseTransfer} from "./components/modals/CanceledInterWarehouseTransfer";

// import {AddInterWarehouseTransferShelves} from "./components/modals/AddInterWarehouseTransferShelves";

const breadcrumbItems = (id) => [
  {label: "Lista przyjęć międzymagazynowych", url: route["app.interWarehouseTransfers"]},
  {label: `MM-${id ?? ""}`},
];

const ViewInterWarehouseTransfer = () => {
  const {interWarehouseTransferId} = useParams();
  const query = useGetSingleInterWarehouseTransfer(interWarehouseTransferId);

  return (
    <>
      <QueryProvider {...query}>
        <Breadcrumb items={breadcrumbItems(query?.data?.id)}>
          {query?.data?.status === 1 && <CanceledInterWarehouseTransfer/> }
          {query?.data?.status === 1 && query?.data?.items?.length > 0 && <ConfirmInterWarehouseTransfer/> }
          {query?.data?.status === 1 && <EditButton url={route["app.interWarehouseTransfer.edit"](interWarehouseTransferId)}/> }
        </Breadcrumb>
        <div className="container pt-1">
          <div className="row">
            <div className="col-12">
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
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className='col-12'>
                          <CardInterWarehouseTransferItemsDataTable/>
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

export default ViewInterWarehouseTransfer;
