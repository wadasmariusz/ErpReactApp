import React from "react";
import {Link, useParams} from "react-router-dom";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {route} from "app/router/urls/routes";
import {useGetSingleWarehouseReceipt} from "app/crud/app/warehouseReceipts/getSingle";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {EditButton} from "components/button/EditButton";
import {CardWarehouseReceiptDetails} from "./cards/CardWarehouseReceiptDetails";
import {Pen, Plus, PlusCircle} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "../../../../app/config/sizes";
import {CardWarehouseReceiptItemsDataTable} from "./cards/CardWarehouseReceiptItemsDataTable";
// import {AddWarehouseReceiptShelves} from "./components/modals/AddWarehouseReceiptShelves";

const breadcrumbItems = (id) => [
  {label: "Lista przyjęć magazynowych", url: route["app.warehouseReceipts"]},
  {label: `PM-${id ?? ""}`},
];

const ViewWarehouseReceipt = () => {
  const {warehouseReceiptId} = useParams();
  const query = useGetSingleWarehouseReceipt(warehouseReceiptId);

  return (
    <>
      <Breadcrumb items={breadcrumbItems(query?.data?.id)}>
        <EditButton url={route["app.warehouseReceipt.edit"](warehouseReceiptId)}/>
      </Breadcrumb>
      <div className="container pt-1">
        <div className="row">
          <div className="col-12">
            <QueryProvider {...query}>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className='col-12'>
                      <CardWarehouseReceiptDetails/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <CardWarehouseReceiptItemsDataTable/>
                </div>
              </div>
            </QueryProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewWarehouseReceipt;
