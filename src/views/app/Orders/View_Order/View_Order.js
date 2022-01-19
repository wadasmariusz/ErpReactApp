import React from "react";
import {Link, useParams} from "react-router-dom";
import {Breadcrumb} from "components/includes/Breadcrumb";
import {route} from "app/router/urls/routes";
import {useGetSingleOrder} from "app/crud/app/orders/getSingle";
import {QueryProvider} from "app/context/data/queries/QueryProvider";
import {EditButton} from "components/button/EditButton";
import {CardOrderDetails} from "./cards/CardOrderDetails";
import {Pen, Plus, PlusCircle} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "../../../../app/config/sizes";
import {CardOrderItemsDataTable} from "./cards/CardOrderItemsDataTable";
// import {ConfirmOrder} from "./components/modals/ConfirmOrder";
// import {CanceledOrder} from "./components/modals/CanceledOrder";
// import {AddOrderShelves} from "./components/modals/AddOrderShelves";

const breadcrumbItems = (orderNumber) => [
  {label: "Lista zamowien", url: route["app.orders"]},
  {label: `NR-${orderNumber ?? ""}`},
  //TODO zamiast id
];

const ViewOrder = () => {
  const {orderId} = useParams();
  const query = useGetSingleOrder(orderId);

  return (
    <>
      <QueryProvider {...query}>
        <Breadcrumb items={breadcrumbItems(query?.data?.orderNumber)}>
          {/*{query?.data?.status === 1 && <CanceledOrder/> }*/}
          {/*{query?.data?.status === 1 && query?.data?.items?.length > 0 && <ConfirmOrder/> }*/}
          {query?.data?.status === 1 && <EditButton url={route["app.order.edit"](orderId)}/> }
        </Breadcrumb>
        <div className="container pt-1">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className='col-12'>
                      <CardOrderDetails/>
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
                          <CardOrderItemsDataTable/>
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

export default ViewOrder;
