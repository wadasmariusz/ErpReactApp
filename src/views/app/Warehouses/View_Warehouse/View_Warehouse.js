import React from "react";
import {Link, useParams} from "react-router-dom";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {route} from "app/router/urls/routes";
import {useGetSingleWarehouse} from "app/crud/app/warehouses/getSingle";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {EditButton} from "components/button/EditButton";
import {CardWarehouseDetails} from "./cards/CardWarehouseDetails";
import {Pen, Plus, PlusCircle} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "../../../../app/config/sizes";
import {CardWarehouseShelf} from "./cards/CardWarehouseShelf";
import {AddWarehouseShelf} from "./components/modals/AddWarehouseShelves";

const breadcrumbItems = (name) => [
  {label: "Lista magazynów", url: route["app.warehouses"]},
  {label: `Magazyn: ${name ?? ""}`},
];

const ViewWarehouse = () => {
  const {warehouseId} = useParams();
  const query = useGetSingleWarehouse(warehouseId);

  return (
    <>
      <Breadcrumb items={breadcrumbItems(query?.data?.name)}>
        <AddWarehouseShelf />
        <EditButton url={route["app.warehouse.edit"](warehouseId)}/>
      </Breadcrumb>
      <div className="container pt-1">
        <div className="row">
          <div className="col-12">
            <QueryProvider {...query}>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className='col-12'>
                      <CardWarehouseDetails/>
                    </div>
                  </div>
                </div>
              </div>

              <h4 className={"mt-5 mb-2"}>Lista półek</h4>
              <div className="row">
                <div className="col-12">
                  <CardWarehouseShelf/>
                </div>
              </div>
            </QueryProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewWarehouse;
