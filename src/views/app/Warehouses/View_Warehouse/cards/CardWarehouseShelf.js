import React from "react";
import {Link} from "react-router-dom"
import {route} from "app/router/urls/routes";
import {useQueryContext} from "../../../../../app/context/data/queries/QueryProvider";
import {PlusCircle, Dash, Pen} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON, SIZE_INPUT_ICON_SM} from "../../../../../app/config/sizes";
import {CardWarehouseShelfProductsDataTable} from "./CardWarehouseShelfProductsDataTable";
import {CardWarehouseShelfProductKindsDataTable} from "./CardWarehouseShelfProductKindsDataTable";

const ShelfCard = ({shelf, warehouseId}) => {
  if (!shelf) {
    return "Brak danych";
  }
  const {id, name, productKinds, products} = shelf;
  const shelfId = shelf.id;
  return (
    <div className="card">
      <div className="card-header">
        <div className="d-flex justify-content-between">
          <h4 className="mb-0">{name}</h4>
          <Link
            to={route["app.warehouse.shelf.edit"](warehouseId, shelfId)}
            className="btn btn-primary btn-sm ml-2">
            <Pen className="mr-25" size={SIZE_INPUT_ICON_SM}/>
            Edytuj
          </Link>
        </div>
      </div>
      <div className="card-body">
          <CardWarehouseShelfProductKindsDataTable productKinds={productKinds}/>
          <CardWarehouseShelfProductsDataTable products={products}/>
      </div>
    </div>
  )
}

export const CardWarehouseShelf = () => {
  const {data} = useQueryContext();
  const shelves = data?.shelves || data || [];
  return (
    <>
      {shelves.map(shelfItem => (
          <ShelfCard
            key={shelfItem.id}
            shelf={shelfItem}
            warehouseId = {data?.id}
          />
        ))}
    </>
  )
}
