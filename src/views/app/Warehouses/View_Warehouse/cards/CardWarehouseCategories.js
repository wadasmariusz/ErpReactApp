import React from "react";
import {useQueryContext} from "app/context/data/queries/QueryProvider";
import {Link} from "react-router-dom"
import {route} from "app/router/urls/routes";
import {EditWarehouseCategories} from "../components/modals/EditWarehouseCategories";

export const CardWarehouseCategories = () => {
  const {data} = useQueryContext();

  return (
    <>
      {data?.categories != null && data?.categories.length > 0 ? (
        <div>
          <h3 className="mb-50">Kategorie:</h3>
          {data?.categories.map(categoryItem => (
            <Link to={route["app.productCategory"](categoryItem.id)}>
              <div className="d-flex justify-content-start">
                <div className="d-flex flex-column">
                  <div className="user-info mb-1">
                    <h4 className="custom-name mb-0">{categoryItem.name}</h4>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className={"mb-50"}>Brak przypisanych kategorii</p>
      )}
      <EditWarehouseCategories/>
    </>
  )
}
