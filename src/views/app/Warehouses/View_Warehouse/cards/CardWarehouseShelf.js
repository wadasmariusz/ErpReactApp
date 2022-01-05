import React from "react";
import {Link} from "react-router-dom"
import {route} from "app/router/urls/routes";
import {useQueryContext} from "../../../../../app/context/data/queries/QueryProvider";
import {PlusCircle, Dash} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON, SIZE_INPUT_ICON_SM} from "../../../../../app/config/sizes";
import {CardWarehouseShelfProductsDataTable} from "./CardWarehouseShelfProductsDataTable";

const ShelfCard = ({shelf}) => {
  if (!shelf) {
    return "Brak danych";
  }
  const {id, name, products} = shelf;
  return (
    <div className="card">
      <div className="card-header">
        <div className="d-flex justify-content-between">
          <Link
            // to={route["app.shelf"](id)}
          >
          <h4 className="mb-0">{name}</h4>
          </Link>

        </div>
      </div>
      <div className="card-body">
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
          <ShelfCard key={shelfItem.id} shelf={shelfItem}/>
        ))}
    </>
  )
}
