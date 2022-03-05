import React from "react";
import {useQueryContext} from "app/context/data/queries/QueryProvider";
import {Link} from "react-router-dom"
import {route} from "app/router/urls/routes";
import {EditProductKind} from "views/app/Products/View_Product/components/modal/EditProductKind";

export const CardProductKind = () => {
  const {data} = useQueryContext();

  return (
    <>
      {data?.productKind?.id ? (
        <Link to={route["app.productKind"](data?.productKind?.id)}>
          <div className="d-flex justify-content-start">
            <div className="d-flex flex-column">
              <div className="user-info mb-1">
                <h3 className="mb-50">Rodzaj:</h3>
                <h4 className="custom-name mb-0">{data?.productKind?.name}</h4>
              </div>
            </div>
          </div>
        </Link>) : (
        <p className={"mb-50"}>Brak przypisanego rodzaju</p>
      )}
      <EditProductKind/>
    </>
  )
}
