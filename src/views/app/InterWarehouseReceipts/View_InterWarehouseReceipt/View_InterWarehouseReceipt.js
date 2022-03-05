import React from "react";
import {Link, useParams} from "react-router-dom";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {route} from "app/router/urls/routes";
import {useGetSingleInterWarehouseReceipt} from "app/crud/app/interWarehouseReceipts/getSingle";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {EditButton} from "components/button/EditButton";
import {CardInterWarehouseReceiptDetails} from "./cards/CardInterWarehouseReceiptDetails";
import {Pen, Plus, PlusCircle} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "../../../../app/config/sizes";
import {CardInterWarehouseReceiptItemsDataTable} from "./cards/CardInterWarehouseReceiptItemsDataTable";
import {ConfirmInterWarehouseReceipt} from "./components/modals/ConfirmInterWarehouseReceipt";
import {CanceledInterWarehouseReceipt} from "./components/modals/CanceledInterWarehouseReceipt";
// import {AddInterWarehouseReceiptShelves} from "./components/modals/AddInterWarehouseReceiptShelves";

const breadcrumbItems = (id) => [
  {label: "Lista przyjęć magazynowych", url: route["app.interWarehouseReceipts"]},
  {label: `PM-${id ?? ""}`},
];

const ViewInterWarehouseReceipt = () => {
  const {interWarehouseReceiptId} = useParams();
  const query = useGetSingleInterWarehouseReceipt(interWarehouseReceiptId);

  return (
    <>
      <QueryProvider {...query}>
        <Breadcrumb items={breadcrumbItems(query?.data?.id)}>
          {query?.data?.status === 1 && <CanceledInterWarehouseReceipt/> }
          {query?.data?.status === 1 && query?.data?.items?.length > 0 && <ConfirmInterWarehouseReceipt/> }
          {query?.data?.status === 1 && <EditButton url={route["app.interWarehouseReceipt.edit"](interWarehouseReceiptId)}/> }
        </Breadcrumb>
        <div className="container pt-1">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className='col-12'>
                      <CardInterWarehouseReceiptDetails/>
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
                          <CardInterWarehouseReceiptItemsDataTable/>
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

export default ViewInterWarehouseReceipt;
