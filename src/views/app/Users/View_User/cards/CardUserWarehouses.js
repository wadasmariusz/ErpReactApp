import React from "react";
import {Link} from "react-router-dom"
import {route} from "app/router/urls/routes";
import {useQueryContext} from "../../../../../app/context/data/queries/QueryProvider";
import {PlusCircle, Dash, Pen, Plus} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON, SIZE_INPUT_ICON_SM, SIZE_INPUT_ICON_XS} from "../../../../../app/config/sizes";
import {CardUserWarehousesDataTable} from "./CardUserWarehousesDataTable";
import {AddUserWarehouses} from "../components/AddUserWarehouses";

export const CardUserWarehouses = () => {
  const {data} = useQueryContext();
  const warehouses = data.warehouses || [];
  return (
    <div className="card">
      <div className="card-header">
        <div className="d-flex justify-content-between">
          <h4 className="mb-0">Dostęp do magazynów:</h4>
          <AddUserWarehouses />
        </div>
      </div>
      <div className="card-body">
        <CardUserWarehousesDataTable warehouses={warehouses}/>
      </div>
    </div>
  )
}
