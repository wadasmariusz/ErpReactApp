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
import {ConfirmWarehouseReceipt} from "./components/modals/ConfirmWarehouseReceipt";
import {CanceledWarehouseReceipt} from "./components/modals/CanceledWarehouseReceipt";
// import {AddWarehouseReceiptShelves} from "./components/modals/AddWarehouseReceiptShelves";

const breadcrumbItems = (id) => [
  {label: "Lista przyjęć zewnętrznych", url: route["app.warehouseReceipts"]},
  {label: `PZ-${id ?? ""}`},
];

const ViewWarehouseReceipt = () => {
  const {warehouseReceiptId} = useParams();
  const query = useGetSingleWarehouseReceipt(warehouseReceiptId);

  return (
    <>
      <QueryProvider {...query}>
        <Breadcrumb items={breadcrumbItems(query?.data?.id)}>
          {query?.data?.status === 1 && <CanceledWarehouseReceipt/> }
          {query?.data?.status === 1 && query?.data?.items?.length > 0 && <ConfirmWarehouseReceipt/> }
          {query?.data?.status === 1 && <EditButton url={route["app.warehouseReceipt.edit"](warehouseReceiptId)}/> }
        </Breadcrumb>
        <div className="container pt-1">
          <div className="row">
            <div className="col-12">
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
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className='col-12'>
                          <CardWarehouseReceiptItemsDataTable/>
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

export default ViewWarehouseReceipt;
